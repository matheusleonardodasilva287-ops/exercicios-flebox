const mensagem = document.getElementById("mensagem");
const botao = document.querySelector("#botao");
const contador = document.getElementById("contador");

mensagem.textContent = "O JavaScript está funcionando!";
mensagem.style.color = "green";

let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;
  contador.textContent = cliques;
  botao.textContent = "Clicado!";
});
