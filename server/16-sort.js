//sort method organizes elements from an array and it's mutable ↓

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months)
// [ 'Dec', 'Feb', 'Jan', 'March' ]
//Sorts the array based in the ASCII table (from Unicode). D-F-J-M

const numbers = [1, 30, 4, 21, 100000];
numbers.sort(); //Without telling the inner function how to organize the elements, will do it based upon the ASCII table, that means not exactly in the "logical" order of smaller to greater or viceversa
console.log(numbers);
// [ 1, 100000, 21, 30, 4 ]

numbers.sort((a, b) => a - b); //telling the function to organize from smaller to greater
console.log(numbers)
//[ 1, 4, 21, 30, 100000 ]

//sorting a list with special characters. These characters have their own order in the ASCII table and some older browsers (Internet Explorer) and older versions of node need an additional step to sort these elements ↓
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b)) // .localeCompare() additional step
console.log(words)
// [
//     'adieu',
//     'banana',
//     'café',
//     'communiqué',
//     'éclair',
//     'premier',
//     'réservé'
//   ]


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        startDate: new Date(2021, 1, 1, 15)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        startDate: new Date(2021, 1, 1, 17)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        startDate: new Date(2021, 1, 1, 18)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        startDate: new Date(2021, 1, 1, 9)
    },
];
//sort from greater to smaller in sales
orders.sort((a,b) => b.total - a.total);
console.log(orders);
// [
//     { customerName: 'Santiago', total: 1840, delivered: true },
//     { customerName: 'Nicolas', total: 600, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true },
//     { customerName: 'Zulema', total: 120, delivered: false }
//   ]
  
//challenge: sort orders with dates
orders.sort((a, b) => a.startDate - b.startDate);
console.log(orders);
// [
//     {
//       customerName: 'Valentina',
//       total: 240,
//       delivered: true,
//       startDate: 2021-02-01T13:00:00.000Z
//     },
//     {
//       customerName: 'Nicolas',
//       total: 600,
//       delivered: true,
//       startDate: 2021-02-01T19:00:00.000Z
//     },
//     {
//       customerName: 'Zulema',
//       total: 120,
//       delivered: false,
//       startDate: 2021-02-01T21:00:00.000Z
//     },
//     {
//       customerName: 'Santiago',
//       total: 1840,
//       delivered: true,
//       startDate: 2021-02-01T22:00:00.000Z
//     }
//   ]

//challenge: order months of the year