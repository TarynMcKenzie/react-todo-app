import React from "react";

// COMPONENT
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<ToDo
						text={todo.text}
						key={todo.key}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
					/>
				))}
				{/* for each todo object in the array use the ToDo.js file to make html elements */}
			</ul>
		</div>
	);
};

export default ToDoList;
