function solution(array) {
	return array.map(item => {
		return {...item,
		 taxes: Math.trunc(.19 * item.price)}
	 })
}; 

console.log(solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ]))

  // retornar órdenes de compra resueltas 

  function solution2(array) {
	return array.filter(item => {
		if (item.total == 100 && item.delivered === true) {
			return item;
		 }
	 })
}; 

console.log(solution2([
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
  ]));


//Query search:

function solution3(words, query) {
	const newArr = words.filter(item => item.includes(query))
	return newArr;
}; 

console.log(solution3(["ana", "santi", "nico", "anastasia"], "an"));
console.log(solution3(["ana", "santi", "nico", "anastasia"], "xyz"));

// Total orders:

function solution(orders) {
    return orders.reduce( (accum, adition) => accum + adition.total, 0)
}; 

console.log(solution([
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
  ])
  )


//find odd or even numbers

function solution(numbers) {
    return numbers.some(item => item %2 === 0? true : false)
}; 

console.log(solution([1, 3, 5, 7, 10, 11]))
console.log(solution([1, 3, 5]))

//find out if inside an array is certain card:
function solution(cards) {
	return cards.includes('AS')? cards.find(item => item === 'AS') : false;
}; 

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']))
console.log(solution(['diamonds', 'hearts', 'spades']))

//find index of 'myKey' in array:

function solution(words) {
    return words.includes('myKey') ? words.findIndex(item => item === 'myKey') : false
}; 

console.log(solution(["diamonds", "myKey", "spades", "AS"]))
console.log(solution(["diamonds", "hearts", "spades"]))
console.log(solution(["myKey", "hearts", "spades"]))

// separate elements from an array of strings by commas:

function solution(words) {
	return words.join();
}; 

console.log(solution(["amor", "sol", "piedra", "día"]));
console.log(solution(["diamonds", "hearts", "spades"]));

//transform an array of 1 string into an url:

function solution(title) {
    return title.split(' ').map(word => word.toLowerCase()).join('-')
}; 

console.log(solution("La forma de correr Python"))
console.log(solution("La API para nunca parar de aprender"))
console.log(solution("Curso de arrays"))