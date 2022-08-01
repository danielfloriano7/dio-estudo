var nome = "João";

console.log(nome[2],nome[0],nome[1],nome[3]);

let teste = "\"oi\"";

console.log(teste);

let frase = "Olá, tudo bem?";
frase = frase.toLowerCase()

console.log(frase.split(''))

let separando = frase.split(' ');

console.log(typeof separando);

let temAPalavra = frase.toUpperCase().includes('B' && 'b');

console.log(temAPalavra);

let comecar = frase.startsWith('olá');
console.log(comecar)

let terminar = frase.endsWith('bem?')
console.log(terminar);

let trocar = frase.replace('o', 0)
console.log(trocar);