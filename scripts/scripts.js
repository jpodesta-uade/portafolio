const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function linkMail(){
    navigator.clipboard.writeText("jpodesta8@gmail.com");
    alert("Mail copiado en el borrador.");
}