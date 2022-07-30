//Estrutura
function name(params) {
    //instruções
}


//Função Anônima
const soma1 = function( a, b) {
    return a + b;
}

console.log(soma1(4,3));

//Função autoinvocável
(
    function() {
        let name = "Daniel";
        return name;
    } 
)();

const soma3 = (
    function(a, b) {
        return a + b;
    }
)(1,2)
console.log(soma3);

// Callbacks
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(n1, n2) {
    return n1 + n2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

console.log(calc(soma, 2, 1));
console.log(calc(sub, 1, 2));