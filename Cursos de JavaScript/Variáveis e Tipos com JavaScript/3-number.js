let num = 10.5;

console.log(num);
console.log(num.toFixed());

console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(typeof num);
console.log(typeof num.toString());

if (num < Math.floor(num) + 0.5) {
    console.log(Math.floor(num));
} else if (num > Math.floor(num) + 0.5) {
    console.log(Math.ceil(num));
} else {
    console.log(num)
}