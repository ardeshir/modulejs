var todos = [
 {
	id: 1,
	task: 'Commit me',
	completed: true
 },
{ 
	id: 2,
	task: 'Push me',
	completed: false
},
{
	id: 3,
	task: 'Go home',
	completed: false
}
]

console.log("All the todos");
console.log(todos);

var comleted = [];
for( let todo of todos) {
	if (todo.completed) {
	completed.push(todo);
	}
}
console(completed);

