const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  // console.log(link);
  // Pegar href do link
  const href = link.href;
  //   console.log(href);
  const url = document.location.href;

  if (href === url) {
    // Mudar backgroud
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}

links.forEach(ativarLink);
