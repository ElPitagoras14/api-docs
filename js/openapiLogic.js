const openapiDef = document.currentScript.getAttribute("opendef")

const ui = SwaggerUIBundle({
  url: openapiDef,
  dom_id: "#swagger-ui",
  requestSnippetsEnabled: true,
  syntaxHighlight: {
    active: true,
    theme: "obsidian"
  }
})

window.onload = () => {
  window.ui = ui
};