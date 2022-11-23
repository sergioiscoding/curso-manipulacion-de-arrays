//using for loop

const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    console.log('for', letter);
}

//using forEach method

letters.forEach(item => console.log('forEach', item));
