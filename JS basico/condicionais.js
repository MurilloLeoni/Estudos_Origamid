const botao = document.querySelector(".btn");
const div = document.querySelector(".numero");

if (botao) {
  botao.addEventListener("click", () => {
    if (div.innerHTML < 10) {
      div.innerHTML = Number(div.innerHTML) + 1;
    } else {
      console.log("Limite atingido");
    }
  });
} else {
  console.log("Botão nao encontrado");
}
