/* Objetivos do códigos:
tornar os botões funcionais para que, ao clicar neles, suas respectivas informações sejam exibidas
*/
const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselectBotão();
        desselectPersona();

        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");
    });
});

function desselectPersona() {
    const personagemSelec = document.querySelector(".personagem.selecionado");
    personagemSelec.classList.remove("selecionado");
}

function desselectBotão() {
    const botaoSelec = document.querySelector(".botao.selecionado");
    botaoSelec.classList.remove("selecionado");
}
