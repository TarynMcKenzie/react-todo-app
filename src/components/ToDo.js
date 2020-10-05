import React from "react";

const ToDo = ({ text, todos, todo, setTodos }) => {
	// === DELETE HANDLER ===
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	// === COMPLETED HANDLER ===
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	
	return (
		<div className="todo">
			<button onClick={completeHandler} className="btn complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<li
				className={`todo-item ${
					todo.completed ? "completed" : " "
				}`}
			>
				{text}
			</li>
			<button onClick={deleteHandler} className="btn delete-btn">
				<i className="fas fa-trash"></i>
			</button>
			<button className="btn edit-btn">
				<i className="fas fa-pen"></i>
			</button>
			<input type="text" value={todo.value}></input>
		</div>
	);
};

export default ToDo;
