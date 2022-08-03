"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'desenvolvedor'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvera'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Devenvolverdora"] = 2] = "Devenvolverdora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Devenvolverdora
};
const maria = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Devenvolverdora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Devenvolverdora,
    materias: ['Mat', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Mat', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
        ;
    }
}
listar(monica.materias);
