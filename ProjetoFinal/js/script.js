//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar itens do orcamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".questions button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("active");
  const ativa = resposta.classList.contains("active");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicycle-images img");
const galeriaContainer = document.querySelector(".bicycle-images");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animacao
if (window.SimpleAnime) {
  new SimpleAnime();
}
