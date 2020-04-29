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
  }
}