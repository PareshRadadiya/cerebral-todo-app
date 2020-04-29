
export const ids = {
  create: () => {
    return Date.now().toString();
  }
};

export const storage = {
  saveTodos: todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  getTodos: () => {
    return JSON.parse(localStorage.getItem("todos") || "{}");
  }
};