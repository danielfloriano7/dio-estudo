// this == isto
const pessoa = {
    firstN: "Daniel",
    lastN: "Floriano",
    id: 15,
    fullN: function() {
        return this.firstN + " " + this.lastN;
    },
    getId: function() {
        
        return this.id;
    }
};

console.log(pessoa.fullN());
console.log(pessoa.firstN); 
console.log(pessoa.getId()); 
console.log(this);

console.log("-------------------");

// Manipulando seu valor
// Call
const amigo = {
    nome: 'Gui',
    cpf: "213.412.422-21",
    idade: 33,
};

const animal = {
    nome:'Mia'
};



function getSomethis() {
    console.log(this);
}

getSomethis.call(amigo)
getSomethis.call(animal)

const myNums = {
    num1: 2,
    num2: 5,
    num3: 6,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + this.num3 + a + b);
}

soma.call(myNums, 10, 5)

console.log("-------------------");



//Apply
const amigo2 = {
    nome: 'Gabriel'
};

const animal2 = {
    nome:'Frida'
};

function getSomethis2() {
    console.log(this.nome);
}

getSomethis2.apply(amigo2)
getSomethis2.apply(animal2)

function soma2(a, b) {
    console.log(this.num1 + this.num2 + this.num3 + a + b);
}

soma.apply(myNums, [10, 5])

console.log("-------------------");
//Bind

const retornaNomes = function() {
    return this.nome;
}
let bruno = retornaNomes.bind({nome: "Bruno"});

console.log(bruno()); 