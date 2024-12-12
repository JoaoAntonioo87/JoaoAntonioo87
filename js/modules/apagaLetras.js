export default function apagaLetras(div) {
  const textoArray = div.innerText.split("");
  let i = 0;
  const whats = document.querySelector(".contato-rapido");
  setTimeout(() => {
    const apagador = setInterval(() => {
      if (!div.innerHTML.length) {
        whats.classList.remove("ativo");
        return clearInterval(apagador);
      }
      div.innerHTML = div.innerHTML.replace(textoArray[i++], "");
    }, 75);
  }, 3000);
}
