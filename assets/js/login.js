const validarDatos = (e) => {
  e.preventDefault();
  let formulario = document.getElementById("formLogin");
  let data = new FormData(formulario);
  fetch("php/login.php",{
    method:"POST",
    body:data
  })
  .then(res => res.text())
  .then(texto => {
    console.log(texto)
  })
};

//validarDatos();

document.addEventListener("submit", (event) => {
  if (event.target === document.getElementById("formLogin")) {
    validarDatos(event);
  }
});
