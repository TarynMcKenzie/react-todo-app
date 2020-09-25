import React from "react";
import useId from "react-id-generator";

const Form = ({ setInputText, inputText, setTodos, todos }) => {
	const idList = useId(); // id generated from the package: react-id-generator

	// === INPUT HANDLER ===
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	// === SUMBIT TODO HANDLER ===
	const submitToDoHandler = (e) => {
		e.preventDefault(); // Do not refresh
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				deleted: false,
				id: idList,
			},
		]);
		setInputText("");
	};

	return (
		<form>
			<input
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
				value={inputText}
			/>
			<button
				onClick={submitToDoHandler}
				className="todo-button"
				type="submit"
			>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
