//find the element inside a condition with for loop

const numbers = [9, 6, 3, 5, 19, 39, 38, 45, 12, 72, 50, 18];

let rta = undefined; //the result of the method is undefined as default

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 50){
        rta = element;
        break; //we'll stop the for loop when we find the first element that checks the condition
    }   
}

console.log('for', rta); //for 72

//Now with "find". Find will return the whole object, not an array. That's the difference between find and filter. As it will return the object (the reference), makes the mehthod mutable, therefore you can modify the original array

const rta2 = numbers.find(item => item >= 50);
console.log('find', rta2) //find 72


//FindIndex will throw the index of the element that validates the condition. If it doesn't find anything will throw -1

const rta3 = numbers.findIndex(item => item >= 50);
console.log('findIndex', rta3) //findIndex 9

//Using find with a more complex case:

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  //Find the element with id: 🌭

  const rta4 = products.find(item => item.id === '🌭');
  console.log('find 🌭', rta4); //find 🌭 { name: 'Hot dog', price: 34, id: '🌭' }

  //mutating the original object through find:

  rta4.name = 'Not a hot-dog';
  console.log('modified', products)
//   modified [
//     { name: 'Pizza', price: 12, id: '🍕' },
//     { name: 'Burger', price: 23, id: '🍔' },
//     { name: 'Not a hot-dog', price: 34, id: '🌭' },
//     { name: 'Hot cakes', price: 355, id: '🥞' }
//   ]
  //What's the index of element with price: 23?

  const rta5 = products.findIndex(item => item.price == 23);
  console.log('findIndex of price: 23', rta5); //1