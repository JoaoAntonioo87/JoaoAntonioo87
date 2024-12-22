export default function initDataAnima() {}

const dataElements = document.querySelectorAll("[data-anima]");

function verifica() {
  dataElements.forEach((element) => {
    // console.log(element.offsetTop);
    if (element.offsetTop < (window.pageYOffset + window.outerHeight) * 1) {
      element.classList.add(element.attributes[1].nodeValue);
    } else {
      element.classList.remove(element.attributes[1].nodeValue);
    }
  });
}

window.addEventListener("scroll", verifica);
setTimeout(verifica, 3000);
