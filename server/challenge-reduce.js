//Challenge:
//Expected output:
// {
//     1-5: 5,
//     6-8: 23,
//     9-10: 5,
// }

//Form 1:
const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 6, 8, 9, 6, 7, 10, 9, 9, 9];

const oneToFive = numbers.filter( item => item >= 1 && item <= 5);
const sixToEigth = numbers.filter(item => item >= 6 && item <= 8);
const nineToTen = numbers.filter(item => item >= 9 && item <= 10);

const newObj = {};

newObj['1-5'] = oneToFive.length;
newObj['6-8'] = sixToEigth.length;
newObj['9-10'] = nineToTen.length;

console.log(newObj)

//Form 2:


const rta = numbers.reduce( (obj, item) => {
    if (item >= 1 && item <= 5){
        if(!obj['1-5']){
            obj['1-5'] = 1;
        } else {
            obj['1-5'] = obj['1-5'] + 1;
        }
        // console.log(obj[item]);
    } else if (item >= 6 && item <= 8) {
        if(!obj['6-8']){
            obj['6-8'] = 1;
        } else {
            obj['6-8'] = obj['6-8'] + 1;
        }
    } else if (item >= 9 && item <= 10){
        if(!obj['9-10']){
            obj['9-10'] = 1;
        } else {
            obj['9-10'] = obj['9-10'] + 1;
        }
    }
    return obj;
}, {})

console.log('rta', rta)

//Playground exercise
            function calcSum(array) {
                return array.reduce((a,b) => a + b, 0)
              }
console.log(calcSum([1, 1, 1]))              
console.log(calcSum([2, 4, 8]))              
console.log(calcSum([]))              