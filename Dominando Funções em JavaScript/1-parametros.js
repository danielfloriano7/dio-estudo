// Valores padrão e Objeto "arguments"
function showArgs() {
    return arguments
}
console.log(showArgs(10, 29, [21,32,44],"string")); 

// Arrays 
//Spread:
function sun(x, y, z) {
    return x + y + z;
};

const numbers = [2, 4, 7];

console.log(sun(...numbers));

// Rest:
function confereTam(...params) {
    console.log(params.length)
}

confereTam() // 0
confereTam(8, 2) // 2
confereTam(7, 4, 5) // 3

// Objetos
const user = {
    id: 7,
    displayName: 'DanielFS11',
    fullName: {
        firstName: "Daniel",
        lastName: "Floriano"
    }
};

function userId({id}) {
    console.log(id); 
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    console.log(`${first} ${last}`); 
}

function getDisplayName({displayName: dName /*ou só: displayName*/ }) {
    console.log(dName /* displayName */ );
    
}

userId(user)
getFullName(user)
getDisplayName(user)