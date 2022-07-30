//solucao 1
function verificaPalindromo1(string) {
if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo1("eae"))

//solucao 2
function veriticaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let gat = "gat"

console.log(veriticaPalindromo2("gag"));
console.log(gat.length / 2);