import digitaLetras from "./digitaLetras.js";
import apagaLetras from "./apagaLetras.js";

export default function animaLetras() {
  // whats
  const whats = document.querySelector(".contato-rapido");
  const whatsLink = whats.querySelector("a");
  const mensagem = "Entre em contato";

  setTimeout(() => {
    const novaDiv = document.createElement("div");
    whatsLink.appendChild(novaDiv);
    digitaLetras(mensagem, novaDiv, 75);
    setTimeout(() => {
      apagaLetras(novaDiv);
    }, 2000);
  }, 10000);

  // Nome
  const nome = "João Antonio";
  const teste = document.querySelector("h1");
  setTimeout(() => {
    const novaDiv2 = teste;
    // teste.innerText = nome;
    digitaLetras(nome, novaDiv2, 125);
  }, 1000);
}
