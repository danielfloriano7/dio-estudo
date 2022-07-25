var currentNumberWrapper = document.querySelector('#currentNumber');
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    if( currentNumber > 0) {
        currentNumberWrapper.style.color = "green"
    }
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = "black"
    }
}

const decrement = () => {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red"
    }
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = "black"
    } 
}
   
    

