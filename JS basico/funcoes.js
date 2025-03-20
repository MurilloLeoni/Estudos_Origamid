function logCurso() {
  const nome = "Curso de JavaScript";
  console.log(nome);
}

logCurso();

function logCurso2(nome) {
  console.log(nome);
}

logCurso2("Curso de JavaScript 2");

function logCurso3(nome, horas) {
  console.log(nome, horas);
  return {
    nomeTeste: nome,
    horasTeste: horas,
  };
}

const retorno = logCurso3("Curso de JavaScript 3", 40);
console.log(retorno.horasTeste);

const ativar = document.querySelector(".ativar");

function ativarBotao(event) {
  console.log(event.x, event.y);
}

// ativar.addEventListener("click", ativarBotao);

// console.log(ativar);

const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

botao.addEventListener("click", mostrar);

const alturaTela = window.innerHeight;
const larguraTela = window.innerWidth;

console.log(alturaTela);
console.log(larguraTela);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  console.log(window.pageYOffset);
}

window.addEventListener("scroll", scroll);
