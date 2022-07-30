function substituiPares(number) {
    if (!number) return -1;
    if (!number.length) return -1;

    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            number[i] = 0;
        }
    }
    return number;
};

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(array))