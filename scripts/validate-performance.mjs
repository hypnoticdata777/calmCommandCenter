import { readFile, readdir, stat } from "node:fs/promises";
import { gzip } from "node:zlib";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";

const gzipAsync = promisify(gzip);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const publicWorkImagesDir = path.join(projectRoot, "public", "images", "work");

const budgets = {
  mainJsRawBytes: 650 * 1024,
  mainJsGzipBytes: 200 * 1024,
  cssRawBytes: 160 * 1024,
  cssGzipBytes: 50 * 1024,
  totalAssetRawBytes: 900 * 1024,
  totalAssetGzipBytes: 275 * 1024,
  workImageBytes: 350 * 1024,
  totalWorkImageBytes: 2 * 1024 * 1024,
};

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return listFiles(fullPath);
      }
      return [fullPath];
    })
  );

  return files.flat();
}

async function measureFile(filePath) {
  const file = await stat(filePath);
  const content = await readFile(filePath);
  const gzipped = await gzipAsync(content);

  return {
    path: filePath,
    name: path.relative(projectRoot, filePath).replaceAll("\\", "/"),
    rawBytes: file.size,
    gzipBytes: gzipped.length,
  };
}

function assert(condition, message, issues) {
  if (!condition) {
    issues.push(message);
  }
}

async function main() {
  const issues = [];
  const assetFiles = await listFiles(path.join(distDir, "assets"));
  const assetMeasures = await Promise.all(assetFiles.map(measureFile));
  const jsFiles = assetMeasures.filter((file) => file.name.endsWith(".js"));
  const cssFiles = assetMeasures.filter((file) => file.name.endsWith(".css"));
  const totalAssetRawBytes = assetMeasures.reduce(
    (sum, file) => sum + file.rawBytes,
    0
  );
  const totalAssetGzipBytes = assetMeasures.reduce(
    (sum, file) => sum + file.gzipBytes,
    0
  );

  const mainJs = jsFiles.reduce(
    (largest, file) => (file.rawBytes > largest.rawBytes ? file : largest),
    { rawBytes: 0, gzipBytes: 0, name: "" }
  );
  const mainCss = cssFiles.reduce(
    (largest, file) => (file.rawBytes > largest.rawBytes ? file : largest),
    { rawBytes: 0, gzipBytes: 0, name: "" }
  );

  assert(
    mainJs.rawBytes <= budgets.mainJsRawBytes,
    `Main JS raw size ${formatBytes(mainJs.rawBytes)} exceeds ${formatBytes(
      budgets.mainJsRawBytes
    )}`,
    issues
  );
  assert(
    mainJs.gzipBytes <= budgets.mainJsGzipBytes,
    `Main JS gzip size ${formatBytes(mainJs.gzipBytes)} exceeds ${formatBytes(
      budgets.mainJsGzipBytes
    )}`,
    issues
  );
  assert(
    mainCss.rawBytes <= budgets.cssRawBytes,
    `CSS raw size ${formatBytes(mainCss.rawBytes)} exceeds ${formatBytes(
      budgets.cssRawBytes
    )}`,
    issues
  );
  assert(
    mainCss.gzipBytes <= budgets.cssGzipBytes,
    `CSS gzip size ${formatBytes(mainCss.gzipBytes)} exceeds ${formatBytes(
      budgets.cssGzipBytes
    )}`,
    issues
  );
  assert(
    totalAssetRawBytes <= budgets.totalAssetRawBytes,
    `Total JS/CSS asset raw size ${formatBytes(
      totalAssetRawBytes
    )} exceeds ${formatBytes(budgets.totalAssetRawBytes)}`,
    issues
  );
  assert(
    totalAssetGzipBytes <= budgets.totalAssetGzipBytes,
    `Total JS/CSS asset gzip size ${formatBytes(
      totalAssetGzipBytes
    )} exceeds ${formatBytes(budgets.totalAssetGzipBytes)}`,
    issues
  );

  const imageFiles = await listFiles(publicWorkImagesDir);
  const imageStats = await Promise.all(
    imageFiles.map(async (filePath) => {
      const file = await stat(filePath);
      return {
        name: path.relative(projectRoot, filePath).replaceAll("\\", "/"),
        bytes: file.size,
      };
    })
  );
  const totalWorkImageBytes = imageStats.reduce(
    (sum, image) => sum + image.bytes,
    0
  );

  for (const image of imageStats) {
    assert(
      image.bytes <= budgets.workImageBytes,
      `${image.name} is ${formatBytes(image.bytes)} and exceeds ${formatBytes(
        budgets.workImageBytes
      )}`,
      issues
    );
  }

  assert(
    totalWorkImageBytes <= budgets.totalWorkImageBytes,
    `Total Work image payload ${formatBytes(
      totalWorkImageBytes
    )} exceeds ${formatBytes(budgets.totalWorkImageBytes)}`,
    issues
  );

  console.log("Performance budget snapshot:");
  console.log(
    `- Main JS: ${formatBytes(mainJs.rawBytes)} raw / ${formatBytes(
      mainJs.gzipBytes
    )} gzip (${mainJs.name})`
  );
  console.log(
    `- Main CSS: ${formatBytes(mainCss.rawBytes)} raw / ${formatBytes(
      mainCss.gzipBytes
    )} gzip (${mainCss.name})`
  );
  console.log(
    `- JS/CSS total: ${formatBytes(totalAssetRawBytes)} raw / ${formatBytes(
      totalAssetGzipBytes
    )} gzip`
  );
  console.log(
    `- Work images: ${imageStats.length} files / ${formatBytes(
      totalWorkImageBytes
    )} total`
  );
  console.log(
    `- Largest Work image: ${
      imageStats.sort((a, b) => b.bytes - a.bytes)[0]?.name
    } at ${formatBytes(imageStats[0]?.bytes ?? 0)}`
  );

  if (issues.length) {
    console.error("\nPerformance budget failed:");
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("\nPerformance budget passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
