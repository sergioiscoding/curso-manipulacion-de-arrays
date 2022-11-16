//applying with for

const words = ['exuberant', 'doubled', 'coin', 'brake'];

const newWords = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6){
        newWords.push(element);
    }
}

console.log('original', words); //original [ 'exuberant', 'doubled', 'coin', 'brake' ]
console.log('newWords', newWords); //newWords [ 'exuberant', 'doubled' ]

//with filter

const words2 = ['lyfsic', 'tripled', 'stranding', 'son', 'book', 'stairs', 'key'];
const rta2 = words2.filter( item => {
    return item.length >= 5 //filter is an inmutable method, doesn't alter the original array and when the validation yiels true, will fill the new array with the element that is true
})
console.log('words2', words2); //words2 [ 'lyfsic', 'tripled', 'stranding', 'son', 'book', 'stairs', 'key' ]
console.log('rta2', rta2); //rta2 [ 'lyfsic', 'tripled', 'stranding', 'stairs' ]

//now with a single line

const words3 = ['reedus', 'mikkelsen', 'børson', 'zegez', 'adna', 'asylum', 'roar'];
const rta3 = words3.filter(item => item.length >= 6);

console.log('words3', words3); //words3 [ 'reedus', 'mikkelsen', 'børson', 'zegez', 'adna', 'asylum', 'roar' ]
console.log('rta3', rta3); //rta3 [ 'reedus', 'mikkelsen', 'børson', 'asylum' ]

//using more complex validations

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

const approvedOrders = orders.filter( item => { //item is the objetc to iterate
    return item.delivered //is already a boolean so it doesn't need to be validated
    //will return the object to fill the approvedOrders array
})

console.log('orders', orders);
// orders [
//     { customerName: 'Nicolas', total: 60, delivered: true },
//     { customerName: 'Zulema', total: 120, delivered: false },
//     { customerName: 'Santiago', total: 180, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]
console.log('approvedOrders', approvedOrders);
// approvedOrders [
//     { customerName: 'Nicolas', total: 60, delivered: true },
//     { customerName: 'Santiago', total: 180, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]
  
const biggerThan150 = orders.filter(item => item.total >= 150);
console.log('orders', orders);
console.log('biggerThan150', biggerThan150);
// biggerThan150 [
//     { customerName: 'Santiago', total: 180, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]

//a more complex validation

const callback = (query) => {
    return orders.filter( item => {
        return item.customerName.includes(query); //includes method checks if an array exists inside another array
    })
}

console.log(callback('le'));
// [
//     { customerName: 'Zulema', total: 120, delivered: false },
//     { customerName: 'Valentina', total: 240, delivered: true }
//   ]

