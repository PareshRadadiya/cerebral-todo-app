import {state, props, sequences } from 'cerebral';

export const initialize = ({store,get,storage,router}) => {
  store.set('todos',storage.getTodos());
};

export const createId = ({ids})=>({id:ids.create()});

export const createTodo = ({store, get}) => {
  const id = get(props`id`);
  store.set(`todos.${id}`, {
    id,
    title:get(state`newTodoTitle`),
    completed:false
  });
};

export const toggleAllTodos = ({store,get}) => {
  const isAllChecked = get(state`isAllTodosChecked`);
  const todos = get(state`currentTodos`);

  for(let i = 0;i<todos.length;i++){
    store.set(`todos.${todos[i].id}.completed`,!isAllChecked);
  }
};
