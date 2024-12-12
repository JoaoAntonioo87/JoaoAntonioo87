import apagaLetras from "./apagaLetras.js";
export default function digitaLetras(texto, div) {
  const textoArray = texto.split("").reverse();
  const digitador = setInterval(() => {
    if (!textoArray.length) {
      apagaLetras(div);
      return clearInterval(digitador);
    }
    let proximoCaractere = textoArray.pop();
    div.innerHTML += proximoCaractere;
  }, 75);
}
