var currentNumberWrapper = document.querySelector('#currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    
}

const decrement = () => {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    
}

if (currentNumberWrapper > 0) {
    currentNumberWrapper.style.color = "blue"
}
