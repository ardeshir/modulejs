function printPerson(p) {
    console.log(`${p.firstName} ${p.lastName} - ${p.age}`);
}

function greet(p) {
    console.log(`Hello, I am ${p.firstName}`);
}

function checkID(p) {
    
    if (p.age >= 18) {
        console.log(`${p.firstName} is an adult`);
    } else {
        console.log(`${p.firstName} is NOT an adult`);
    }
}


module.exports = {
    printP: printPerson,
    greet: greet,
    checkID: checkID
};