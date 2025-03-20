const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const imagemClicada = event.currentTarget;
  const imagemPrincipal = document.querySelector("#imagem-principal");
  imagemPrincipal.src = imagemClicada.src;
  imagemPrincipal.alt = imagemClicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);
