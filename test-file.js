let todos = [
    {
        id: 1,
        task: "Commit me",
        completed: true
    }, { 
        id: 2,
        task: "Push me",
        completed: true
    }, {
        id: 3,
        task: "Go home",
        completed: true }
];

// console.log("All the todos");
// console.log(todos);

let completed = [];

for( let todo of todos) {
    if (todo.completed) {
        completed.push(todo);
    }
}

function makePending(todos){
	// for(let i=0; i<todos.length; i++) {
	// 	todos[i].completed = false;
	// }
	
	todos.forEach((todo, index) => {
	    todo.completed = false;	
	});
}
// console.log(completed)



function identify(todos){
	// for(let i = 0; i < todos.length; i++) {
	// 	todos[i].id = i+2;
	// }
	
	return todos.map((todo, index) => {
		
		return {
			...todo,
			id: index + 3
		}
		
	});
	// console.log("Todos inside: ", todos);
}

console.log("Todos before: \n", todos);
// makePending(todos);
let newtod = identify(todos);
console.log("Todos : \n", newtod);


let numbers = [
	1,2,3,4,5,6,7,8,9,10
	];
	
function getEven(numbers) {
	return numbers.filter( (num) => num % 2 == 0 );
}

console.log(getEven(numbers))