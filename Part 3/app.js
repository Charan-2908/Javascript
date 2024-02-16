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