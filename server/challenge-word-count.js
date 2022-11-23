//Recieve an array of a single string and count the total number of words

function solution(arr){
    let count = 0;
    const newArr = arr.flatMap(item => item.split(' '))
    const number = newArr.map(data => 
        {
            data.map( e => {
                count++
            })
        })
    return count;
}

//input
console.log(solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]));

//output:
//20

//other solution:

function solution2(array){
    return array.flatMap(item => item.split(' ')).length
}

console.log(solution2([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]));
