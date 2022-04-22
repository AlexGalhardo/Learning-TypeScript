// Code goes here!
const newName = 'alex';
// let age = 14;


const hobbies = ['nadar', 'videogame', 'netflix']

const activeHobbies = ['hiking']
activeHobbies.push(...hobbies)

const person = {
	firstName: 'alex',
	age: 20
}

const referencePerson = person; // same reference

const copyPerson = { ...person } // new copy

const addNumbers = (...numbers: number[]) => {
	return numbers.reduce((currentResult, currentValue) => {
		return currentResult + currentValue
	}, 0)
}

let somedNumbers = addNumbers(1, 2, 3, 4, 5)

console.log(somedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2)

const { firstName: userName, age } = person;

console.log(userName, age, person)