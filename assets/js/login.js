const validarDatos = () => {
  let formulario = document.getElementById("formLogin");
  let data = new FormData(formulario);
};
//validarDatos();

document.addEventListener("submit", (event) => {
  if (event.target === document.getElementById("formLogin")) {
    validarDatos();
  }
});
