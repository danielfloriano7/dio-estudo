// function soma(a, b){
//     return a + b; 
    
// }

// soma(10, 5);

function returnEvenValues(array){
    let par = [];
    let impar = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            par.push(array[i])
        } 
        else {
            impar.push(array[i])
        }

    }
    
    console.log(`Numeros par: ${par} e Numeros impar: ${impar}`);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);
