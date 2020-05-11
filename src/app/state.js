import { state } from 'cerebral';

export default {
  todos: {},
  newTodoTitle: '',
  filter: 'all',
  currentTodos: get => {
    return Object.values(get(state`todos`)).filter(todo=>{
      switch (get(state`filter`)) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    });
  },
  isAllTodosChecked: get => {
    const currentTodos = get(state`currentTodos`);

    return Boolean(currentTodos.length &&
        Object.values(currentTodos).every(todo => todo.completed)
    );
  },
  leftItemsCount: get => {
    const activeTodos= Object.values(get(state`todos`)).filter(todo=>{
          return !todo.completed;
    });

    return activeTodos.length;
  }
}
