let obj = {};
console.log(typeof obj);

obj.name = "Daniel";
// obj.name += 'Julia'
obj.age = 20;

console.log(obj)

console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = {
    name: 'Julia',
    age: 21,
    adress: 'Rua 5'
}

console.log(person.name, person['name']);

let mom = "nameOfMom";

person[mom] = "Maria";

console.log(person)