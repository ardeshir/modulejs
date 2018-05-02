function printPerson(p) {
    console.log(`${p.firstName} ${p.lastName} - ${p.age}`);
}

function greet(p) {
    console.log(`Hello, I am ${p.firstName}`);
}

module.exports = {
    printP: printPerson,
    greet: greet
}