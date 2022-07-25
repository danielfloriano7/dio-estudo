// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof vOuF);

// number
var numero = 1;
console.log(typeof numero)

// string
var nome = 'Daniel'
console.log(typeof nome)

// function
var funcao = function() {}
console.log(typeof funcao)


var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}
escopoLocal()