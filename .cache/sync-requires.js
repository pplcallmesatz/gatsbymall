const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/templates/blog-post.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/templates/index-page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/pages/about.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/pages/blog/index.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/pages/contact.js"))),
  "component---src-pages-markdown-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/pages/markdown.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/satheesh/Documents/Projects/mt-website/src/pages/my-files.js")))
}

