const numbers = [2, 3, 4];

const newArray = numbers.map(item => item * 2);
// const newArray = [];
// for (let index = 0; index < numbers.length; index++){
//     const element = numbers[index];
//     newArray.push(element * 2);
// }


console.log('original', numbers) //original [ 2, 3, 4 ]
console.log('new', newArray) //new [ 4, 6, 8 ]