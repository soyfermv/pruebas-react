import sanitizeHtml from "sanitize-html";

export function sanitizeHTML(html) {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "width", "height"],
    },
  });
}

export function sanitizeCSS(css) {
  return css.replace(/expression|javascript|url\(/gi, "");
}
