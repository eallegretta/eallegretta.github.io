const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");

const pages = [
  {
    output: "index.html",
    title: "Paletools - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paletools",
    containerClass: "container mt-5",
    assetPrefix: "",
    page: "home.html",
    baseHref: "fifa/",
    structuredData: true,
  },
  {
    output: "fifa/index.html",
    title: "Paletools - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paletools",
    containerClass: "container mt-5",
    assetPrefix: "../",
    page: "home.html",
    baseHref: "",
  },
  {
    output: "fifa/paletools.html",
    title: "Paletools - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paletools",
    containerClass: "container",
    assetPrefix: "../",
    page: "paletools.html",
    scripts: "paletools-scripts.html",
  },
  {
    output: "fifa/companion.html",
    title: "Paletools - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paletools",
    containerClass: "container",
    assetPrefix: "../",
    page: "companion.html",
  },
  {
    output: "fifa/paledroid.html",
    title: "Paledroid - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paledroid",
    containerClass: "container",
    assetPrefix: "../",
    page: "paledroid.html",
  },
  {
    output: "fifa/inyected.html",
    title: "Inyected Companion - The only EA FC Ultimate Team Helper you will ever need",
    bodyClass: "paledroid",
    containerClass: "container",
    assetPrefix: "../",
    page: "inyected.html",
  },
  {
    output: "terms.html",
    title: "Terms of Service - Paletools",
    bodyClass: "paletools",
    containerClass: "container mt-5",
    assetPrefix: "",
    page: "terms.html",
  },
  {
    output: "privacy.html",
    title: "Privacy Policy - Paletools",
    bodyClass: "paletools",
    containerClass: "container mt-5",
    assetPrefix: "",
    page: "privacy.html",
  },
];

function readTemplate(relativePath) {
  return fs.readFileSync(path.join(SRC, relativePath), "utf8");
}

function renderTemplate(template, context) {
  return template
    .replace(/{{>\s*([\w/-]+\.html)\s*}}/g, (_, partial) =>
      renderTemplate(readTemplate(path.join("partials", partial)), context),
    )
    .replace(/{{\s*([\w]+)\s*}}/g, (_, key) => {
      if (Object.prototype.hasOwnProperty.call(context, key)) {
        return context[key] || "";
      }

      throw new Error(`Missing template variable: ${key}`);
    });
}

for (const page of pages) {
  const content = renderTemplate(readTemplate(path.join("pages", page.page)), page);
  const scripts = page.scripts
    ? renderTemplate(readTemplate(path.join("partials", page.scripts)), page)
    : "";
  const structuredData = page.structuredData
    ? renderTemplate(readTemplate(path.join("partials", "structured-data.html")), page)
    : "";
  const html = renderTemplate(readTemplate("layout.html"), {
    ...page,
    content,
    scripts,
    structuredData,
  });
  const output = path.join(ROOT, page.output);

  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, html, "utf8");
  console.log(`Generated ${page.output}`);
}
