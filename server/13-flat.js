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

const matrix2 = [
    [2, 2, 4, 8],
    [3, 6, 5, [4, 7, 3, [2, 4, 6]]],
    [1, [9, 8 ,4], 7],
]

let empty = [];

function aplanar(list){
    if(typeof(list) === 'object'){
        list.forEach(item => {
            aplanar(item);
        });
    }else {
        empty = empty.concat(list);
        //empty.push(list) //same as ↑
    }
}

aplanar(matrix2)

console.log(empty)
// [
//     2, 2, 4, 8, 3, 6, 5,
//     4, 7, 3, 2, 4, 6, 1,
//     9, 8, 4, 7
//   ]

// another sol

function recursion(arr){
    let newMatrix = [];
    if (typeof(arr) != 'object'){
        return [arr] //single element array returned
    }
    arr.forEach( element => {
        newMatrix = newMatrix.concat(recursion(element)) //concat is used to insert elements inside an array without the problems of push()
    })
    console.log(newMatrix);
    return newMatrix;
}

const result = recursion(matrix2)

console.log(result)

//////////////////////// recrusive algorithm to flat out multidimensional array ↓ still don't understand it

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray2 = profundidad(matriz);

console.log(newArray2);