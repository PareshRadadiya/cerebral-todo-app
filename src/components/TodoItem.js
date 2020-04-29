import React from 'react';
import { state, props, sequences } from "cerebral";
import { connect } from '@cerebral/react';

const TodoItem = connect({
	todo: state`todos.${props`id`}`,
},
	({ todo }) => {
		return (
						<li className={(
							               todo.completed ? ' completed ' : ''
						               )}>
							<div className="view">
								<input
									className="toggle"
									type="checkbox"
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
