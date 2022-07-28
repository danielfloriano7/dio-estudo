const comparaNumero = (num1, num2) => {
    if (num1 == null || num2 == null) return "Defina dois números!";

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
};

const criaPrimeiraFrase = (num1,num2) => {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = "não";
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `;
}

const criaSegundaFrase = (num1, num2) => {
    const soma = num1 + num2;

    let r10 = "menor";
    let r20 = "menor";

    soma >= 10 ? r10 = "maior ou igual" : "";
    soma >= 20 ? r10 = "maior ou igual" : "";

    return `Sua soma é ${soma}, que é ${r10} que 10 e ${r20} que 20.` 
}

console.log(comparaNumero(0,1));