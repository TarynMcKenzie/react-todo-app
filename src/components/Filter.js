import React from "react";

const Filter = ({ setStatus }) => {
	// === STATUS HANDLER ===
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div className="select" onChange={statusHandler}>
			<select name="todos" className="filter-todo">
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="uncompleted">Uncompleted</option>
			</select>
		</div>
	);
};

export default Filter;
