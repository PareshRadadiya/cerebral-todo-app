import {state,props} from 'cerebral';
import {set,when,toggle,unset} from 'cerebral/factories';
import * as actions from './actions';

export const initialize = actions.initialize;

export const changeNewTodoTitle = set(state`newTodoTitle`,props`title`);

export const addTodo = [
  actions.createId,
  actions.createTodo,
  set(state`newTodoTitle`,'')
];

export const toggleTodoCompleted = toggle(state`todos.${props`id`}.completed`);

export const toggleAllTodos = actions.toggleAllTodos;

export const changeFilter = set(state`filter`, props`filter`);

export const removeTodoItem = unset(state`todos.${props`id`}`);
