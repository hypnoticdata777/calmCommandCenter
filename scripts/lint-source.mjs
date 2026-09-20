import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const checkedRoots = ["src", "scripts", "tests"];
const checkedExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".ts",
  ".tsx",
]);

const ignoredDirectories = new Set([
  ".git",
  "dist",
  "node_modules",
  "outputs",
]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...(await collectFiles(fullPath)));
      }
      continue;
    }

    if (checkedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function toDisplayPath(filePath) {
  return path.relative(projectRoot, filePath).replaceAll(path.sep, "/");
}

function inspectText(filePath, text) {
  const issues = [];
  const lines = text.split(/\r?\n/);
  const displayPath = toDisplayPath(filePath);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    if (/\s+$/.test(line)) {
      issues.push(`${displayPath}:${lineNumber} trailing whitespace`);
    }

    if (/\t/.test(line)) {
      issues.push(`${displayPath}:${lineNumber} tab character`);
    }

    if (/^\s*debugger\s*;?\s*$/.test(line)) {
      issues.push(`${displayPath}:${lineNumber} debugger statement`);
    }

    if (/\.(only|skip)\s*\(/.test(line)) {
      issues.push(`${displayPath}:${lineNumber} focused or skipped test`);
    }
  });

  return issues;
}

async function main() {
  const files = (
    await Promise.all(
      checkedRoots.map((root) => collectFiles(path.join(projectRoot, root)))
    )
  ).flat();

  const issues = [];

  for (const file of files) {
    issues.push(...inspectText(file, await readFile(file, "utf8")));
  }

  if (issues.length) {
    console.error("Source lint failed:");
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Source lint passed for ${files.length} files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
