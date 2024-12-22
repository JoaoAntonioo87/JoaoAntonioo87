export default function scrollSuave() {
  const listaLinks = Array.from(document.querySelectorAll("[href^='#']"));
  const eventos = ["click", "touchstart"];

  function handleAnima(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  let i = 0;
  eventos.forEach(function (evento) {
    if (i > 1) {
    } else {
      i++;
      listaLinks.forEach((link) => {
        link.addEventListener(evento, handleAnima);
      });
    }
  });
}
