//concatenating elements with for loop

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];
 
// const newArray = [...elements]; //this way we are making up a reference in memory. Like so, mutating orinal array "elements" 

const newArray = [...elements]; //with spread operator there's no second memory reference

for (let i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    newArray.push(element);
}

console.log('for', newArray)
// for [
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]

//with "concat" method

const rta = elements.concat(otherElements); //no need to use spread operator here for "otherElements"

console.log('concat', rta)

// concat [         //memory reference was altered with for cycle
//     1, 1, 2, 2, 3,
//     3, 4, 4, 3, 3,
//     4, 4
//   ]

// concat [         //correcting memory reference by declaring newArray = [...elements] → using spread operator
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]

//examples:
let rta2 = [];

rta2 =  rta2.concat(elements, otherElements); //another form to use concat
console.log('concat v.2', rta2)
// concat v.2 [
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]

let rta02 = [...elements, ...otherElements];
console.log('...', rta2)
// ... [
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]


const rta3 = [...elements, 'random'];
console.log('... + string', rta3);
// ... + string [ 1, 1, 2, 2, 'random' ]

const rta4 = [...elements, ...'random'];
console.log('... + ...string', rta4);
// ... + ...string [
//     1,   1,   2,   2,   'r',
//     'a', 'n', 'd', 'o', 'm'
//   ]
  
// elements.push(otherElements);
// console.log(elements)
// [ 1, 1, 2, 2, [ 3, 3, 4, 4 ] ]

elements.push(...otherElements);
console.log(elements)
// [
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]
  

//copy an array of objects:

// const rta5 = objArray.map( a => ({...a})) //({}) is object copy syntax