import React from 'react';
import { state, props, sequences } from "cerebral";
import { connect } from '@cerebral/react';

const TodoItem = connect({
		todo: state`todos.${props`id`}`,
		toggleTodoCompleted: sequences`toggleTodoCompleted`,
},
	({
		 todo,
		 toggleTodoCompleted,
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
							</div>
						</li>
		);
	}
);

export default TodoItem;
