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

function countTruthy(array) {
    let count = 0
    for (let value of array)
        if (value)
            count++
    return count
}

const array= [0, 1, 2, 3, undefined, null]
console.log(countTruthy(array))


const movie = {
    title : 'a',
    releaseYear : 2018,
    rating : 4.5,
    director : "unknown"
}
showProperties(movie)

function showProperties(obj) {
    for (key in obj) 
        if (typeof obj[key] === "string") 
            console.log(key, obj[key]);
}

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    }
    return sum;
}
console.log(sum(15))

function calculateGrade(marks) {
    let sum = 0
    for(let mark of marks) 
        sum += mark
    let average = sum / marks.length

    if (average <= 59) return "Fail"
    if (average < 70) return "D"
    if (average < 80) return "C"
    if (average < 90) return "B"
    return "A"
}
const marks = [90, 90, 90];
console.log(calculateGrade(marks))


function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = ""
        for (let i = 0; i < row; i++)
            pattern += "*"
        console.log(pattern)
    }
}
showStars(5)


function showPrimes(limit) {
    for (let number = 2; number<= limit; number++) {

        let isPrime = true
        for (let factor = 2; factor < number; factor++){
            if (number % factor === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) console.log(number)
    }
}
showPrimes(200)