//how to make a histogram of frecuencies?

const numbers = [3, 5, 2, 1, 4, 5, 5, 3, 4, 2, 2, 1];

const rta = numbers.reduce( (obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
        console.log(obj[item])
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {}) //obj = accumulator → an empty object that will be filled with frecuencies of items

console.log('rta', rta);
//rta { 
//     '1': 2, 
//     '2': 3, 
//     '3': 2, 
//     '4': 2, 
//     '5': 3 
// }

const people = [
    {
        name: 'Nico',
        level: 'low',
    },
    {
        name: 'Joey',
        level: 'medium',
    },
    {
        name: 'Sabrina',
        level: 'high',
    },
    {
        name: 'Joe',
        level: 'high',
    },
    {
        name: 'Robert',
        level: 'low',
    },
    {
        name: 'Xavier',
        level: 'ultra-high',
    }
]

const answ = people
                .map(obj => obj.level)
                .reduce( (obj, item) => {
                    if(!obj[item]){
                        obj[item] = 1;
                    } else {
                        obj[item] = obj[item] + 1;
                    }
                    return obj;
                }, {})

// Frecuencies of levels:
console.log('answer',answ);
//answer { low: 2, medium: 1, high: 2, 'ultra-high': 1 }

//Challenge:
//Expected output:
// {
//     1-5: 5,
//     6-8: 23,
//     9-10: 5,
// }