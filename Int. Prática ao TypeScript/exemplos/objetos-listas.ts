const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'desenvolvedor'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome:'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome:'Paula',
    idade: 25,
    profissao: 'Desenvolvera'
}

enum Profissao {
    Professora,
    Atriz,
    Devenvolverdora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Devenvolverdora
}

const maria: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Devenvolverdora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Devenvolverdora,
    materias: ['Mat', 'programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Mat', 'programação']
}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('- ', item);
        ;
        
    }
}
listar(monica.materias)