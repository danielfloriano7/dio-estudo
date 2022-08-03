"use strict";
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function somarValoresNumericosETratar(num1, num2, callback) {
    let resul = num1 + num2;
    return callback(resul);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMsm(num) {
    return num / num;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMsm));
