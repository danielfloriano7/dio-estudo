const helloWorld1 = function () {
    return "Hello World";
};
const helloWorld2 = () => {
    return "Hello World";
};
const helloWorld3 = () => "Hello World";

const soma = (a, b) => console.log(a + b);
const dobro = a => console.log(a * 2);

soma(3,4);
dobro(6);

//outras restrições
/*
"this" sempre será o objeto global. Métodos para
modificar seu valor não irão funcionar;

Não existe o objeto "arguments";
    
O construtur (ex: new MeuObjeto()) também não
pode ser utilizado.
*/