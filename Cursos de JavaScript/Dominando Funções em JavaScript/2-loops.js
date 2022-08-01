function separacao() {
    console.log("---------------------------------")
}


// If/else 
function numPositivo(num) {
    if(num > 0) {
        return `${num} é positivo`;
    }
    else if (num === 0){
         return "0 é neutro";
    }
    else {
        return `${num} é negativo`;
    }     
}

console.log(numPositivo(9));

separacao()
//Switch
function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
            break;
        case 2:
            return "gato";
            break;
        case 3:
            return "pássaro";
            break;
        default:
            return "escolha um numero."
            break;
    }
}

console.log(getAnimal(2));

separacao()
// For
function multiplicaPorDois(num) {
    let multiplicados = [];

    for (let i = 0; i < num.length; i++) {
        multiplicados.push(num[i] * 2);
    }

    console.log(multiplicados); 
}

multiplicaPorDois([2, 4, 12, 444, 212, 50, 7, 3])

separacao()
// ForIn
const meuObj = {
    name: "Daniel",
    idade: 20,
    cidade: "RJ"
}

function forInExemplo1(obj) {
    for (const prop in obj) {
        console.log(prop);
    }
}
forInExemplo1(meuObj)

function forInExemplo2(obj) {
    for (const prop in obj) {
        console.log(obj[prop]);
    }
}
forInExemplo2(meuObj)

separacao()
// ForOf

function logLetras(palavra) {
    for (let letra of palavra) {
        console.log(letra);
    }
}
const palavra = "abacaxi";

logLetras(palavra)

function logNum(nums) {
    for (let num of nums) {
        console.log(num);
    }
}
const nums = [30, 23, 333, 2];

logNum(nums)

separacao()
//While

function exemploWhile() {
    let num =  0;

    while (num <= 5) {
        console.log(num)
        num++;
    }
}
exemploWhile()

function exemploDoWhile() {
    let num =  10;

    do  {
        console.log(num)
        num++;
    } while(num <= 5)
}
exemploDoWhile()