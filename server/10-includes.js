//Includes with for loop:

const numbers = [1, 6, 4, 2, 5, 3, 6, 7, 8, 10];

let rta = false; //is false if there're no matches

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 3){
        rta = true;
        break;
    }
}

console.log('for', rta) //for true

//Now with includes method
const rta2 = numbers.includes(3); //it doesn't accept arrow functions, only the query to look for matches, therefore you cannot work with objects unless you set the literal object as reference

console.log('includes', rta2); //includes true

// Ejemplos utilizando el método includes
// El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true

//Playground exercise:

function solution(word, query) {
    // return word.split(' ').join('').toLowerCase().includes(query)
    //or better
    return word.split(' ').map(item => item.toLowerCase()).includes(query)
}; 

console.log(solution("Ana lava la tina", "ana"));
console.log(solution("Santiago", "tiago"));
console.log(solution("Nicolas", "ana"));

