/**
 * Cloudflare Worker for Maven Repository & UI
 */
const GITHUB_REPO_URL =
  "https://raw.githubusercontent.com/Nukecraft5419/maven-repo/main";

const MIME_TYPES = {
  ".jar": "application/java-archive",
  ".pom": "text/xml",
  ".xml": "text/xml",
  ".sha1": "text/plain",
  ".md5": "text/plain",
  ".asc": "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Route root access to index.html
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    }

    const targetUrl = `${GITHUB_REPO_URL}${pathname}`;

    // Fetch file from GitHub Raw
    const response = await fetch(targetUrl, {
      headers: { "User-Agent": "Nukecraft5419-Maven-Worker" },
    });

    if (response.status === 404) {
      return new Response("Artifact or file not found", { status: 404 });
    }

    const bodyBuffer = await response.arrayBuffer();
    const newHeaders = new Headers(response.headers);

    // Annihilate GitHub's restrictive security headers
    const headersToAnnihilate = [
      "Content-Security-Policy",
      "Content-Security-Policy-Report-Only",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "X-XSS-Protection",
      "Cross-Origin-Resource-Policy",
      "Cross-Origin-Embedder-Policy",
      "Cross-Origin-Opener-Policy",
      "Content-Encoding",
      "Content-Length",
    ];
    headersToAnnihilate.forEach((header) => newHeaders.delete(header));

    // Enforce CORS for Maven/Gradle clients
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

    // Correct MIME types override
    const extMatch = pathname.match(/\.[a-zA-Z0-9]+$/);
    if (extMatch && MIME_TYPES[extMatch[0].toLowerCase()]) {
      newHeaders.set("Content-Type", MIME_TYPES[extMatch[0].toLowerCase()]);
    }

    // Cache configuration
    if (url.searchParams.has("debug")) {
      newHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");
    } else if (
      pathname.endsWith("maven-metadata.xml") ||
      pathname.endsWith(".html")
    ) {
      newHeaders.set("Cache-Control", "public, max-age=300, s-maxage=300");
    } else {
      newHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
    }

    return new Response(bodyBuffer, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
