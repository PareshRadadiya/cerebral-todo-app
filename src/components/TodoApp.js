import React from 'react';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import {state,sequences} from 'cerebral';
import { connect } from '@cerebral/react';

const TodoApp = connect({
		newTodoTitle: state`newTodoTitle`,
		currentTodos: state`currentTodos`,
		addTodo: sequences`addTodo`,
		changeNewTodoTitle: sequences`changeNewTodoTitle`,
		toggleAllTodos: sequences`toggleAllTodos`,
		isAllTodosChecked: state`isAllTodosChecked`,
},
	({
		 newTodoTitle,
		 currentTodos,
		 addTodo,
		 changeNewTodoTitle,
		 toggleAllTodos,
		 isAllTodosChecked
}) => {
	return (
					<div>
						<form onSubmit={event =>{
							event.preventDefault();
							addTodo();
						}}>
							<header className="header">
								<h1>todos</h1>
								<input
									className="new-todo"
									placeholder="What needs to be done?"
									onChange={event =>
										changeNewTodoTitle({ title: event.currentTarget.value })
									}
									value={newTodoTitle}
									autoFocus={true}
								/>
							</header>
							<section className="main">
								<input
									id="toggle-all"
									className="toggle-all"
									type="checkbox"
									onChange={() => toggleAllTodos()}
									checked={isAllTodosChecked}
									/>
								<label
									htmlFor="toggle-all"
								/>
								<ul className="todo-list">
									{currentTodos.map( todo => (
										<TodoItem key={todo.id} id={todo.id}/>
									) )}
								</ul>
							</section>
						</form>
						<TodoFooter/>
					</div>
	)
	}
);

export default TodoApp;
