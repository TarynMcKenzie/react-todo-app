import React, { useState, useEffect } from "react";
import "./App.css";

// ===== COMPONENTS =====
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	// === USE STATES ===
	const [inputText, setInputText] = useState(" "); // Empty string useState for the text input
	const [todos, setTodos] = useState([]); // Empty array useState for todo list
	const [status, setStatus] = useState("all"); // Empty string useState for the todo status list (Completed, Uncompleted, All)
	const [filteredTodos, setFilteredTodos] = useState([]); //Empty array that will store list based on the list filter selection

	// === USE EFFECT ON REFRESH ===
	useEffect(() => {
		getTodosLocal();
	}, []);

	// === USE EFFECT FOR FILTERS ===
	useEffect(() => {
		filterHandler();
		saveTodosLocal();
	}, [todos, status]);

	// === FILTER FUNCTION ===
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(
					todos.filter((todo) => todo.completed === true)
				);
				break;
			case "uncompleted":
				setFilteredTodos(
					todos.filter((todo) => todo.completed === false)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	// === SAVE TO LOCAL STORAGE ===
	const saveTodosLocal = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	// === GET LOCAL STORAGE ===
	const getTodosLocal = () => {
		if (localStorage.getItem("todos") === null) {
			// if there is no local todos --> then save a new empty array list
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			// if the there are local todos --> get the current local list
			let localTodos = JSON.parse(localStorage.getItem("todos"));
			setTodos(localTodos); //set the state to the local todos
		}
	};


	return (
		<div className="App">
			<header>
				<h1>Honey Do List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			{/* Pass ToDo state and the inputText state down to the Form.js */}
			<ToDoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
			{/* Pass ToDo state down to the ToDoList.js */}
		</div>
	);
}

export default App;
