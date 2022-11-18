//Joining a separator between elements in an array with for loop

const elements = ['Fire', 'Wind', 'Water'];
let rta = '';
const separator = '-';

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rta = rta + element + separator;
}

console.log('for', rta) //for Fire-Wind-Water-

//With join()

const rta2 = elements.join('-')
console.log('rta2', rta2) //rta2 Fire-Wind-Water

//Making a URL from a phrase

const phrase = 'Array manipulation practical course';

const rta3 = phrase.split(' '); //this method transforms a phrase into an array, and the argument stands for the criteria to separate elements from the string

console.log('split', rta3) //split [ 'Array', 'manipulation', 'practical', 'course' ]

const url = rta3.join('-').toLowerCase();

console.log(url); //array-manipulation-practical-course
