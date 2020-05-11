import React from 'react';
import { state, props, sequences } from "cerebral";
import { connect } from '@cerebral/react'

const TodoFooter = connect({
        filter: state`filter`,
        changeFilter: sequences`changeFilter`,
        leftItemsCount: state`leftItemsCount`,
},({
                                  filter,
                                  changeFilter,
                                  leftItemsCount
}) => {
    return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{leftItemsCount}</strong> left
				</span>
				<ul className="filters">
					<li>
						<a
							href="#!"
							onClick={() => changeFilter({filter:'all'})}
							className={filter === 'all' ? 'selected' : ''}>
							All
						</a>
					</li>
					{' '}
					<li>
						<a
							href="#!"
							onClick={() => changeFilter({filter:'active'})}
							className={filter === 'active' ? 'selected' : ''}>
							Active
						</a>
					</li>
					{' '}
					<li>
						<a
							href="#!"
							onClick={() => changeFilter({filter:'completed'})}
							className={filter === 'completed' ? 'selected' : ''}>
							Completed
						</a>
					</li>
				</ul>
			</footer>
    );
}
);

export default TodoFooter;
