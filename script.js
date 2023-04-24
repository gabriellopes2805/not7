const div = document.getElementById("comentarios");
const env = document.getElementById("env");
var contador = 1;

function comentar() {
  const coment = document.getElementById("coment");
  div.innerHTML += `
        <p class="comentario${contador}">${coment.value}</p>
    `;
  contador += 1;
}
env.addEventListener("click", (e) => {
  e.preventDefault();
  comentar();
});
div.addEventListener("submit", (e) => {
  e.preventDefault();
  comentar();
});
