import { useTodoList } from "../context";

export default function TodoList() {
  const { todoList, addTodo, removeTodo } = useTodoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const submitter = document.querySelector("button[value=submit]");
    const formData = new FormData(form, submitter);
    const value = formData.get("todo-value");
    const id = new Date().getTime();

    addTodo({
      id,
      value,
    });

    form["todo-value"].value = "";
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit} className="todo-add-btn">
        <input placeholder="Add todo" id="todo-value" name="todo-value" />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>

      <div className="todo-list">
        {todoList.map(({ id, value }) => (
          <div className="todo-item" key={id}>
            <div className="todo-item-content">{value}</div>
            <div className="todo-delete-btn" onClick={() => removeTodo(id)}>
              X
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
