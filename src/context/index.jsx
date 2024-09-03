import { createContext, useContext, useEffect, useState } from "react";

const initTodoListData = () => {
  const json = localStorage.getItem("todo");

  if (json !== "undefined" && json !== "null") {
    return JSON.parse(json);
  }

  return [];
};

const TodoListContext = createContext({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const useTodoList = () => {
  const response = useContext(TodoListContext);

  if (!response) {
    throw new Error("Using Context into Provider");
  }

  return response;
};

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState(() => initTodoListData());

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const value = {
    todoList,
    addTodo,
    removeTodo,
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
}
