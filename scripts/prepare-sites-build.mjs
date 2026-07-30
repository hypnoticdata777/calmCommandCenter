import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverDir = join(dist, "server");
const hostingDir = join(dist, ".openai");

mkdirSync(serverDir, { recursive: true });
mkdirSync(hostingDir, { recursive: true });

const staticAssets = {
  "/index.html": {
    body: readFileSync(join(dist, "index.html"), "utf8"),
    contentType: "text/html; charset=utf-8",
  },
};

for (const fileName of readdirSync(join(dist, "assets"))) {
  const path = `/assets/${fileName}`;
  const contentType = fileName.endsWith(".css")
    ? "text/css; charset=utf-8"
    : "application/javascript; charset=utf-8";

  staticAssets[path] = {
    body: readFileSync(join(dist, "assets", fileName), "utf8"),
    contentType,
  };
}

writeFileSync(
  join(serverDir, "index.js"),
  `const staticAssets = ${JSON.stringify(staticAssets)};

function serveAsset(path, status = 200) {
  const asset = staticAssets[path];

  if (!asset) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(asset.body, {
    status,
    headers: {
      "content-type": asset.contentType,
      "cache-control": path === "/index.html"
        ? "no-cache"
        : "public, max-age=31536000, immutable",
    },
  });
}

const worker = {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;

    if (staticAssets[path]) {
      return serveAsset(path);
    }

    if (request.method === "GET" || request.method === "HEAD") {
    const accept = request.headers.get("accept") || "";

      if (accept.includes("text/html")) {
        return serveAsset("/index.html");
      }
    }

    return new Response("Not found", { status: 404 });
  },
};

export default worker;
`,
);

copyFileSync(
  join(root, ".openai", "hosting.json"),
  join(hostingDir, "hosting.json"),
);
