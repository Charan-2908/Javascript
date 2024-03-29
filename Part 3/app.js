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
    return person.age < 30
})
console.log(youngPeople);

const developers = people.filter(function(person){
    return person.position === 'developer'
})
console.log(developers);

const person = people.find(function(person){
    return person.age < 30
})
console.log(person);

const names1 = ['bob', 'peter', 'susy']
console.log(names1.find(function(names){
    return names == 'peter'
}));


const employee = [
    { name: "bob", age: 20, position: "developer", salary: 300 },
    { name: "peter", age: 30, position: "designer", salary: 500 },
    { name: "susy", age: 24, position: "manager", salary: 500 },
];

const total = employee.reduce(function(acc, curr){
    console.log(`total ${acc}`);
    console.log(`current money: ${curr.salary}`);
    acc += curr.salary
    return acc
},0)
console.log(total);


console.log(students);

const updatedStudents = students.map(function(student){
    // console.log(student);
    student.role = 'student'
    return student
})
console.log(updatedStudents);

const highScores = students.filter(function(student){
    // if (student.score >= 80){
    //     return student
    // }

    // if (student.score >= 80) return student

    return student.score >= 80
})
console.log(highScores);

const specificIds = students.find(function(student){
    return student.id == 2
})
console.log(specificIds);

const averageScores = students.reduce(function(scoresTotal, student){
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score
}, 0)/students.length
console.log(averageScores);


