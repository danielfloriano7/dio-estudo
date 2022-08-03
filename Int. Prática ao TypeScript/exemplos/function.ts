function printaValoresNumericos(num1:number, num2:number): void{
    console.log(num1 + num2);
}

function somarValoresNumericosETratar(num1: number, num2: number, callback: (num:number) => number): number {
    let resul = num1 + num2;
    return callback(resul);
}

function aoQuadrado(num: number): number {
    return num * num;
}

function dividirPorEleMsm(num:number): number {
    return num/num
}

console.log(somarValoresNumericosETratar(1,3, aoQuadrado));
console.log(somarValoresNumericosETratar(1,3, dividirPorEleMsm));

