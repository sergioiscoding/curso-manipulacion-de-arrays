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

//output an array with only the totals

const rta = orders.map(item => item.total);

console.log('original', orders);
console.log('rta', rta);

//output an array with memory reference, altering original array → using map to alter original array

// const rta2 = orders.map( item => {
//     item.tax = 0.19; //even though we use map, pointing to orignal item without making a copy will result in copying the same memory reference. Therefore original and copy array get altered
//     return item;
// })

// console.log('original', orders);
// console.log('rta2', rta2);

//output array with tax, without altering original array

const rta3 = orders.map(item => {
    return { //return an object
        ...item, //ES6 spread operator to "separate" and copy at the same time the item from original array
        'tax': 0.19, //adding tax attribute
    }
})

console.log('original', orders);
console.log('rta3', rta3);