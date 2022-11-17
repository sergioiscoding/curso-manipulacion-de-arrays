//Reducing an array with for loop

const numbers = [2, 3, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}

console.log(sum); //16

//using reduce to reduce an array

const integers = [9, 5, 7, 3, 1, 2];

const rta = integers.reduce( (accumulator, adition) => accumulator + adition, 0) 
//0 = accumulator value → initial value, then will be result of accumulator + adition | first value by default
//adition = first value of array | second element of array by default

console.log('rta', rta) //rta 27