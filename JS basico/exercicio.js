function livro(nome, ano, autor) {
  const nomeLivro = nome.toUpperCase();
  const idadeLivro = 2050 - ano;
  const fraseLivro = nome + " por " + autor;
  objetoLivro = {
    nome: nomeLivro,
    idadeLivro,
    fraseLivro,
  };
  return objetoLivro;
}

const dadosLivro = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(dadosLivro.fraseLivro);

