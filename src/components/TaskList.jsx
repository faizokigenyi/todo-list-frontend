const TaskList = ({ tasks, onDelete, onUpdate }) => {
    return (
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 border border-gray-300 p-4 rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
              <span className={`text-sm px-2 py-1 rounded 
                ${task.completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {task.completed ? "Completed" : "Not Done"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <p className="text-sm mb-2"><strong>Priority:</strong> {task.priority}</p>
            <div className="flex gap-2">
              <button
                onClick={() => onUpdate(task)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TaskList;
  