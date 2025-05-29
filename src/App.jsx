import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (data) => {
    if (editing) {
      await updateTask(editing.id, data);
      setEditing(null);
    } else {
      await createTask({ ...data, completed: false });
    }
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleEdit = (task) => {
    setEditing(task);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Task Manager
        </h1>
        <TaskForm onSubmit={handleSubmit} defaultValues={editing} />
        <hr className="my-6" />
        <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleEdit} />
      </div>
    </div>
  );
};

export default App;
