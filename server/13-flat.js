//flatting out elements of an array

const matrix = [
    [2, 2, 4],
    [3, 6, 5, [4, 7, 2]],
    [1, 9, 7],
]

const newArray = [];

for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
        const item = matrix[i][j];
        newArray.push(item);
    }
}

console.log('for', newArray);
//for [ 2, 2, 4, 3, 6, 5, [ 4, 7, 2 ], 1, 9, 7 ] //still has another array inside, TODO: solve algorithm with recursion

const rta = matrix.flat();
console.log('flat()', rta)
//rta [ 2, 2, 4, 3, 6, 5, [ 4, 7, 2 ], 1, 9, 7 ]

const rta2 = matrix.flat(2);
console.log('flat(2)', rta2);
// flat(2) [
//     2, 2, 4, 3, 6,
//     5, 4, 7, 2, 1,
//     9, 7
//   ]


