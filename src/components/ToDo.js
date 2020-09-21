import React from "react";

const ToDo = ({ text }) => {
	return (
		<div className="todo">
			<ul>
				<li className="todo-item">{text}</li>
				<button className="btn complete-btn">
					<i className="fas fa-check"></i>
				</button>
				<button className="btn delete-btn">
					<i className="fas fa-trash"></i>
				</button>
				<button className="btn edit-btn">
					<i className="fas fa-pen"></i>
				</button>
			</ul>
		</div>
	);
};

export default ToDo;
