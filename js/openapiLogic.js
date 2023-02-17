const openapiDef = document.currentScript.getAttribute("opendef")

const ui = SwaggerUIBundle({
  url: openapiDef,
  dom_id: "#swagger-ui"
})

window.onload = () => {
  window.ui = ui
};