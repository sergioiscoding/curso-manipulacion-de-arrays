//Flatmap mixes map and flat into 1 single method

//using map and flat separated:

const users = [
    {
        name: 'Xavier', 
        skill_level: 50, 
        attributes: ['wisdom', 'arcane']
    },
    {
        name: 'Jeanette',
        skill_level: 35,
        attributes: ['mage', 'sorcery']
    },
    {
        name: 'Rosemary',
        skill_level: 24,
        attributes: ['strength', 'agility']
    },
]

const rta = users.map(item => item.attributes).flat()

console.log('map-flat',rta)
//display only the attributes
//map-flat [ 'wisdom', 'arcane', 'mage', 'sorcery', 'strength', 'agility' ]

//with flatMap

const rta2 = users.flatMap(item => item.attributes);
console.log('flatMap', rta2)
//flatMap [ 'wisdom', 'arcane', 'mage', 'sorcery', 'strength', 'agility' ]
//flatMap inner working:
// → Only flats to 1 level
// → executes first the map and then the flat

//Challenge. Display an array with only the new Dates:
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const raw = Object.values(calendars)
const subArray = raw.flat() //flat() doesn't have an upper limit of levels to flat, flatMap does, which is only one
const sD = subArray.map(item => item.startDate)

console.log(sD)
// [
//     2021-02-01T19:00:00.000Z,
//     2021-02-01T21:00:00.000Z,
//     2021-02-01T16:00:00.000Z,
//     2021-02-01T13:00:00.000Z
//   ]

//how to know what is inside an undefined?

// item => {
//     console.log(item);   ← displays what is exactly 
//     return item
// }