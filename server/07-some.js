//finding if at least 1 element is even

const numbers = [1, 4, 2, 3];

let rta = false; 

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element % 2 === 0) { //if element is even
        rta = true;
        break; //to stop the for loop, is enough if at least 1 element is true
    }
}

console.log('rta', rta); //rta true


//using some

const rta2 = numbers.some( item => item % 2 === 0);
console.log('rta2', rta2) //rta2 true

//Finding out if two dates overlap:

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  
const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
}; //Is this date going to overlap with the others?

//first we need to install in node the package to use dates function → npm i date-fns

//then importing them 

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping') //Common js

const isOverlapping = (newDate) => {
    return dates.some( date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
            )
    })
}
console.log('isOverlapping', isOverlapping(newAppointment)); 
//isOverlapping true → there is overlap between dates → cannot address any date there

//Playground challenge:
function checkArray(array) {
    return array.some(a => a % 2 === 0);
  }
 
console.log(checkArray([1, 3, 5, 7, 10, 11])); //true
console.log(checkArray([1, 3, 5])); //false
console.log(checkArray([])); //false