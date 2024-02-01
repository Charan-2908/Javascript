console.log("Hello World");

let name = 'Charan';
console.log(name);

let firstName = 'Gujjari Charan';
var lastName = 'Kumar';
var lastName = "Kumar";

console.log(firstName,lastName);
console.log(firstName);
console.log(lastName);

const interestRate = 0.5;
// interestRate = 1;
console.log (interestRate)

let Name = 'Chintu'
let age = 21
let isApproved = false        //primitive types
var lastName = null
let middleName = undefined

let person =  {
    myName : 'Charan',       //object
    age : 21
}

console.log(person)

console.log(person['age']); //bracket notation
console.log(person.age);  //dot notation

let selectedColors = ['red','blue']  //array
console.log(selectedColors[1])
console.log(selectedColors)

function greet(name){
    console.log('Hello ' + name)     //function
}

greet('Charan')


let hour = 18
if (hour >= 6 && hour < 12) 
    console.log("Good Morning")
else if (hour >= 12 && hour < 18)    // if else if else
    console.log("Good Afternoon")
else 
    console.log("Good Evening.!")


let role = "guest"

switch(role) {
    case 'guest' :
        console.log("Guest User")
        break
    case 'moderate':
        console.log('Moderate User')     //switch case
        break
    default:
        console.log('Unknown User')
}

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0)                    //for loop
    console.log(i)
}

let i = 0
while (i<=5) {
    if (i % 2 !== 0)                  //while loop
    console.log(i)
    i++
}

let adult = {
    myName: "Charan",             //object
    age: 21,
}

for (let key in adult)
    console.log(key,person[key])      //for-in

const colors = ['red','green','blue']

for (let color of colors)            //for-of
    console.log(color)


function isLandScape(width,height) {
    // if (width > height)
    // console.log("True")
    // else (console.log("False"))

    return (width > height)
}
console.log(isLandScape(200,150))

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number'
    else if (input % 3 == 0 && input % 5 == 0)
        return 'FizzBuzz'
    else if (input % 3 == 0)
        return 'Fizz'
    else if (input % 5 == 0)
        return 'Buzz'
    else return input
}
console.log(fizzBuzz(9))

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed <= speedLimit)
        return 'Ok'
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint)
        if ( points == 0)
            return 'Ok'
        if (points >= 12)
            return 'Licence Suspended'
        else 
        return 'Points: ' + points
    }
}
console.log(checkSpeed(77))

function showNumbers (number) {
    let i = 0
    while (i <= number){
        if (i % 2 == 0) {
            console.log(i + ' "Even"')
        }
        else {
            console.log(i + ' "Odd"')
        }
        i++
    }    
}
(showNumbers(10))

