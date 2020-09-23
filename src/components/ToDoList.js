import React from "react";

// COMPONENT
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((ToDo) => (
					<ToDo
						text={ToDo.text}
						key={ToDo.key}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
				{/* for each todo object in the array use the ToDo.js file to make html elements */}
			</ul>
		</div>
	);
};

export default ToDoList;
