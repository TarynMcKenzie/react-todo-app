import React, { useState } from "react";
import "./App.css";

// ===== COMPONENTS =====
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	const [inputText, setInputText] = useState(" "); // Empty string useState for the text input
	const [todos, setTodos] = useState([]); // Empty array useState for todo list
	const [status, setStatus] = useState("all"); // Empty string useState for the todo status list (Completed, Uncompleted, All)

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
			<ToDoList todos={todos} setTodos={setTodos} />
			{/* Pass ToDo state down to the ToDoList.js */}
		</div>
	);
}

export default App;
