// TodoService.ts

import TodoTypes from "./todo";


const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {

  //Get Todo Task
  getTodos: (): TodoTypes[] => {
    const todosStr = localStorage.getItem(LOCAL_STORAGE_KEY); //Get data in localStorage
    return todosStr ? JSON.parse(todosStr) : [];
  },

  //Add Todo Task
  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos)); //Save date to localStorage
    return newTodo;
  },

  //Update Todo Task
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos)); //Save date to localStorage
    return todo;
  },

  //Delete Todo Task
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));//Save data to localStorage
  },
};

export default TodoService;
