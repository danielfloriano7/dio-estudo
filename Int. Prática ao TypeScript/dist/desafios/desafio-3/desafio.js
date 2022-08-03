"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let bAtualizar = document.getElementById('atualizar-saldo');
let bLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let saldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (saldo) {
        saldoTotal += soma;
        saldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    if (saldo) {
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}
if (bAtualizar) {
    bAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
bLimpar.addEventListener('click', () => {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
