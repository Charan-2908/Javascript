document.write("Hello Javascript");
// alert("Hello World");
console.log("Hello People");
console.log({name: "john"})


let myName = "Charan"
console.log(myName);
console.log(myName);
console.log(myName);

let address, zip, state
address = "LB nagar"
zip = "500074"
state = "TS"

console.log(address,state,zip);

myName = "Chintu"
console.log(myName);

let _random123_$ = "random"
console.log(_random123_$);

const lastName = "John"
console.log(lastName);

const firstName = "Holaa"
const last_name = "Peter"
let address_1 = "main street"

address_1 = 'first street'

console.log(firstName, last_name, address_1);
console.log(firstName);
console.log(last_name);
console.log(address_1);

const yup = 'Charan\'s courses are the best'
const yupp = "Charan's courses are the best"
console.log(yup);
console.log(yupp);


const name = "Gujjari"
const lasttName = "Charan"
let fullName = name + ' ' + lasttName
console.log("Hello..! Your full name is: " + fullName);


const website = "youtube"
const url = "https://www." + website + ".com"
console.log(url);


const street = "LB Nagar"
const country = "India"
let fullMailingAddress = street + ' ' + country
console.log(fullMailingAddress);


const number = 22
const number2 = 2.342
const number3 = "2.342"
console.log(number);
console.log(number2);
console.log(number3);


let number5 = 40 
number5 += 5
number5 += 5
number5 += 5
number5 += 5
number5 -= 5
number5++
number5++
number5--
number5--
number5 *= 2
number5 /= 2
console.log(number5)


const score1 = 89
const score2 = 55
const score3 = 81

let total = score1 + score2 + score3
let average = (score1 + score2 + score3) / 3

console.log("Total score is:", total);
console.log("Average score is:", average);


const plates = 20
const people = 7
let remainingPlates = plates % people
remainingPlates += 1

let message = "There are" + " " + remainingPlates + " " + "plates available"  
console.log(message);

let helo ;
console.log(typeof helo);
let helo1 = null
console.log(typeof helo1);
let helo2 = true
console.log(typeof helo2);


const friends = ['john', 'peter', 'chintu', 'aditya', undefined, null, 67, true]
console.log(friends);
console.log(typeof friends[5]);
console.log(friends.length);

friends[4] = "Charan"
console.log(friends);
console.log(friends[4]);


fruits = ['apple', 'banana', 'grapes', 'orange', 67]
favourite = fruits[0]
console.log(favourite);

fruits[4] = 'watermelon'
console.log(fruits);


function demo() {
    console.log('Hello there charan');
    console.log('Hello there aditya');
    console.log('Hello there chintu');
}
demo()

function demo3() {
    console.log("Hello there Charan");
}
demo3()
function demo1() {
    console.log("Hello there Chintu");
}
demo1()
function demo2() {
    console.log("Hello there Cherry");
}
demo2()


function greet(username) {
    console.log("Hello there", username);
    console.log("Hello there " + username);
}
greet("Junaid");

function greet1(userName) {
    return "hello there " + userName
}
console.log(greet1("Maaz"));

function calculate(value) {
    return value * 2.54
}
console.log(calculate(200));
const width = calculate(100) 
const height = calculate(230) 

dimensions = [width, height]
console.log(dimensions);
