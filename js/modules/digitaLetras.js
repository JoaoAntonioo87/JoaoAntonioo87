export default function digitaLetras(texto, div, tempo) {
  const textoArray = texto.split("").reverse();
  const digitador = setInterval(() => {
    if (!textoArray.length) {
      return clearInterval(digitador);
    }
    let proximoCaractere = textoArray.pop();
    div.innerHTML += proximoCaractere;
  }, tempo);
}
