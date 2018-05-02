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

console.log(todos);
makePending(todos);
console.log(todos);

