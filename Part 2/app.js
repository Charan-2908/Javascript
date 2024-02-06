let text = "Peter Jordan"
let result = text.length
console.log(text.length);
console.log(result);
console.log(text.toLocaleUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(text.length-1));
console.log(text.charAt(0));
console.log(text.indexOf('J'));
console.log(text.trim()); //removes white spaces
console.log(text);
console.log(text.startsWith('Peter'));
console.log(text.toLowerCase().startsWith('peter'));
console.log(text.includes("Dan"));
console.log(text.slice(0,4));
console.log(text.slice(-3));


const name = 'John'
const age = 30

const sentence = "Hey it's " + name + " and he is " + age + " years old"
const value = `Hey it's ${name} and he is ${age} years old `
console.log(value);
console.log(sentence);

function fullName1(firstName, lastName) {
    name1 = `${firstName} ${lastName}`
    return name1.toLocaleUpperCase()
}
console.log(fullName1("Charan", "Kumar"));


function fullName({firstName, lastName}) {
    name1 = `${firstName} ${lastName}`      //passing arguments as obj
    return name1.toLocaleUpperCase()
}
console.log(fullName({ lastName: "Kumar", firstName: "Charan" }));


let names = ["John", 'Bobo','barry', 'Olga', 'ben']

// length
console.log(names.length);
console.log(names[names.length-1]);

// concat
const lastNames = ['Pepper', 'Onion', 'Banana']
const allNames = names.concat(lastNames)
console.log(allNames);
console.log(allNames.reverse());

// unshift
allNames.unshift('Charan')
allNames.unshift('Chintu')
console.log(allNames);

// shift
allNames.shift()
allNames.shift()
allNames.shift()
console.log(allNames);

// push
allNames.push('Susy')
console.log(allNames);

// pop
allNames.pop()
allNames.pop()
console.log(allNames);

// splice ~ split
specificNames = allNames.splice(3)
console.log(specificNames);
console.log(allNames);

// arrays and for loop
const namess = ['anna', 'susy', 'bob']
const Lastname = ['shakeandbake']
let newArray = []

// for loop 
for (let i = 0; i < namess.length; i++) {
    // console.log(i);
    // console.log(namess[i]);
    let FullName = `${namess[i]} ${Lastname}` 
    newArray.push(FullName)
}

console.log(newArray);
console.log(namess);


// funtions, retuen, if, arrays, for loop
const gas = [20,40,45,90] 
const food = [7,12,36]

function calculateTotal(arr) {
    let total = 0
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        total += arr[i]
    }
    if (total > 100) {
        console.log("Whoa.! You're spending too much");
        return total
    } console.log("Okk good..!");
    return total
}

const gasTotal = calculateTotal(gas)
const foodTotal = calculateTotal(food)
const randomTotal = calculateTotal([200, 500, 900])

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
});

const valuee = 2 < 1
value ? console.log("True") : console.log("False");

