import { useForm } from "react-hook-form";
import { useEffect } from "react";

const TaskForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValues || {},
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("title")}
        placeholder="Title"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        {...register("description")}
        placeholder="Description"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        {...register("priority")}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {defaultValues ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
