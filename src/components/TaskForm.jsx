import { useCreateTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
