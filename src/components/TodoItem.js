import React from 'react';
import { state, props, sequences } from "cerebral";
import { connect } from '@cerebral/react';

const TodoItem = connect({
		todo: state`todos.${props`id`}`,
		toggleTodoCompleted: sequences`toggleTodoCompleted`,
		removeTodoItem: sequences`removeTodoItem`
},
	({
		 todo,
		 toggleTodoCompleted,
		 removeTodoItem
	 }) => {
		return (
						<li className={(
							               todo.completed ? ' completed ' : ''
						               )}>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
									onChange={() => toggleTodoCompleted({id:todo.id})}
									checked={todo.completed}
								/>
								<label>
									{todo.title}
								</label>
								<button type="button" className="destroy" onClick={() => removeTodoItem({id:todo.id})}/>
							</div>
						</li>
		);
	}
);

export default TodoItem;
