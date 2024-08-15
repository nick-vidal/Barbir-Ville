/*

OBJETIVO 1 - QUANDO O USUÁRIO CLICAR NA SETA AVANÇAR, AVANÇAR PARA A PROXIMA CARTA...

    PASSO 1 - PEGAR O ELEMENTO HTML DA SETA AVANÇAR 

    PASSO 2 - DAR UM JEITO DE IDENTIFICAR QUANDO O USUÁRIO CLICAR NELE

    PASSO 3 -MUDAR PARA A PRÓXIMA CARTA DA LISTA 

    PASSO 4 - ESCONDER A CARTA QUE ESTAVA SELECIONADA 

OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NA SETA VOLTAR, IR PARA A CARTA ANTERIOR...

    PASSO 1 - PEGAR O ELEMENTO HTML DA SETA VOLTAR 

    PASSO 2 - DAR UM JEITO DE IDENTIFICAR QUANDO O USUÁRIO CLICAR NELE

    PASSO 3 -MUDAR PARA A CARTA ANTERIOR DA LISTA 

    PASSO 4 - ESCONDER A CARTA QUE ESTAVA SELECIONADA 
*/

// PASSO 1 - PEGAR O ELEMENTO HTML DA SETA AVANÇAR

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionada = document.querySelector(".selecionada");
    cartaoSelecionada.classList.remove("selecionada");
}

function mostrarCartaoSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionada");
}


btnAvancar.addEventListener("mouseenter", function () {

    if (cartaoAtual === cartoes.length - 1) {
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual++;

    mostrarCartaoSelecionado();

});

btnVoltar.addEventListener("mouseenter", function () {

    if (cartaoAtual <= 0) {
        return
    }

    esconderCartaoSelecionado();

    cartaoAtual--;

    mostrarCartaoSelecionado();

});
function playAudio() {
    let x = document.getElementById("myAudio"); x.play();
}
function pauseAudio() {
    let x = document.getElementById("myAudio"); x.pause();
}



