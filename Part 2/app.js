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
