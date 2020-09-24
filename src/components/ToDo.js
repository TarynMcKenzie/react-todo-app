import React from "react";

const ToDo = ({ text, todos, todo, setTodos }) => {

	// === DELETE HANDLER ===
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	return (
		<div className="todo">
			<li className="todo-item">{text}</li>
			<button className="btn complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="btn delete-btn">
				<i className="fas fa-trash"></i>
			</button>
			<button className="btn edit-btn">
				<i className="fas fa-pen"></i>
			</button>
		</div>
	);
};

export default ToDo;
