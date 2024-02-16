document.write('Hello')

const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'peter', age: 30, position: 'designer'},
    {name: 'susy', age: 24, position: 'manager'}
]

people.forEach(function(item) {
    console.log(item.position.toLowerCase());
})

function showPerson(people) {
    console.log(people.position.toUpperCase());
}
people.forEach(showPerson);

const ages = people.map(function(person) {
    // console.log(person);
    return person.age
})
console.log(ages);

const names = people.map(function(person) {
    return `<h1>${person.name.toUpperCase()}</h1>`
})

document.body.innerHTML = names.join('')
console.log(names);

const youngPeople = people.filter(function(person){

})