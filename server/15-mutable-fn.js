//functions used to mutate the original array

//picking a product from the list:

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
 
//I want to pick the hot-cakes

// const productIndex = products.findIndex(item => item.id == '🥞');
// if(productIndex != -1){
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex, 1)
// }

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));


//Creating an array without the burger

const newMenu = products.filter(item => item.id !== '🍔')


console.log("products", products);
console.log("newMenu", newMenu);
console.log("-".repeat(10));

//Updating the original array 


const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🍕',
    changes: {
        price: 300,
        attributes: ['special', 'vibrant', 'elocuent', 'cheesy']
    }
}

const newIndex = productsV2.findIndex(item => item.id === '🍕');
productsV2[newIndex] = { //this particular object → { title: 'Pizza', price: 121, id: '🍕' }
    ...productsV2[newIndex], //destructuring the object (not changing the memory reference) → if 2 properties have the same key, the latter will prevail with its value
    ...update.changes, //adding the object that contains the new price and attributes
}

console.log(productsV2)

//create a new array without mutating the original array but with new attributes:

const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update2 = {
    changes: {
        price: 500,
        attributes: ['meaty', 'fatty', 'greasy']
    }
}

const alteredMenu = productsV3.map(i => {
    if(i.id === '🍔'){
        return {
            ...i,
            ...update2.changes,
        }
    }else {
        return i
    }
})

console.log('productsV3', productsV3)
console.log('alteredMenu', alteredMenu)