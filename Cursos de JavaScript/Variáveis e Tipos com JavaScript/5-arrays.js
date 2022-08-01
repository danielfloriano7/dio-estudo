let array = [9,3];

array.push(10);
array.push(2)

console.log(array)

array.pop()

console.log(array)

array.shift()

console.log(array);

for (let i in array) {
    console.log(array[i])
}




let saber =  array.every(item => item === '10' );

console.log(saber);

let saber2 = array.some(item => item === 3)

console.log(saber2);

array.push(23)
array.unshift(1)

console.log(array.reverse());