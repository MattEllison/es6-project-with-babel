function test(target, other) {
	console.log('what')
	console.log('target', target)
	console.log('other', other)
}



class TodoStore {
	todos = [];

	get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length;
	}

	@test report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}

