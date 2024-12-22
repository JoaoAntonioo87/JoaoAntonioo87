export default function apagaLetras(div) {
  const textoArray = div.innerText.split("");
  let i = 0;

  setTimeout(() => {
    const apagador = setInterval(() => {
      if (!div.innerHTML.length) {
        return clearInterval(apagador);
      }
      div.innerHTML = div.innerHTML.replace(textoArray[i++], "");
    }, 75);
  }, 3000);
}
