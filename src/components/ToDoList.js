import React from "react";

// COMPONENT
import Todo from "./ToDo";


const ToDoList = ({ToDo}) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{ToDo.map( (ToDo) => (
					<ToDo text={ToDo.text} />
				))} 
				{/* for each todo object in the array use the ToDo.js file to make html elements */}
			</ul>
		</div>
	);
};

export default ToDoList;
