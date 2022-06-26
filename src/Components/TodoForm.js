import React, { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm() {
	const [name, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodos = () => {
		const todo = {
			id: nanoid(),
			todo: name,
		};
		setTodos([...todos, todo]);
		setTodo("");
	};

	const markTodo = (id) => {
		let todo = [];
		todo = todos.filter((todo) => todo.id !== id);
		setTodos(todo);
	};

	return (
		<>
			<div className="container p-5">
				<h1 className="text-center">Todo</h1>
				<div className="row ">
					<div className="col-md-8 offset-md-2">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Add To"
								value={name}
								onChange={(e) => setTodo(e.target.value)}
							/>
							<span
								className="input-group-text btn btn-primary btn-lg"
								onClick={addTodos}
							>
								ADD
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<ul className="list-group">
							{todos.map((todo) => (
								<li className="list-group-item" key={todo.id}>
									{todo.todo}
									<i
										style={{ cursor: "pointer" }}
										className="fa-solid fa-check-double float-end"
										onClick={() => {
											markTodo(todo.id);
										}}
									></i>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default TodoForm;
