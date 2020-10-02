import React from "react";
import useId from "react-id-generator";


const Form = ({ setInputText, inputText, setTodos, todos, setStatus }) => {
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
		<form className="todo-form">
			<input
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
				placeholder="Add a new task..."
				value={inputText}
			/>
			<button
				onClick={submitToDoHandler}
				className="todo-button"
				type="submit"
			>
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};

export default Form;
