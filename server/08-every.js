//Finding out if all elements are beyond 40

const numbers = [13, 29 ,32, 1, 38, 51];

let rta = true;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element >= 40){
        rta = false;
    }
} 
console.log('rta', rta); //rta false

//Now with every → every number must be below 40, if not will return false
const rta2 = numbers.every(a => a < 40); 
console.log('rta2', rta2) //rta2 false


//Lesson challenge:

//All players of the team must be below 15 years old:

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
]

const below15 = team.every( member => member.age < 15);
console.log(below15); //false → Santiago's age is greater than 15

//Playground challenge
function checkArray(array) {
    if (array.length === 0){
        return false
    } else {
        return array.every( a => a % 2 === 0);
    }
}


console.log(checkArray([2, 4, 6, 8, 10]));      //true
console.log(checkArray([1, 3, 5, 7, 10, 11]));  //false
console.log(checkArray([1, 3, 5]));             //false
console.log(checkArray([]));                    //false