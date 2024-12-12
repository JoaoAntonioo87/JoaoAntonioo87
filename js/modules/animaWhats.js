import digitaLetras from "./digitaLetras.js";

export default function animaWhats() {}

const whats = document.querySelector(".contato-rapido");
const whatsLink = whats.querySelector("a");
const mensagem = "Entre em contato";

setTimeout(() => {
  whats.classList.add("ativo");
  const novaDiv = document.createElement("div");
  whatsLink.appendChild(novaDiv);
  digitaLetras(mensagem, novaDiv);
}, 5000);
