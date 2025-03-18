import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  const addtask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setnewTask("");
  };

  const toggleComplete = (index) => {
    const updatedtasks = [...tasks];
    updatedtasks[index].completed = !updatedtasks[index].completed;
    setTasks(updatedtasks);
  };

  const editTask = (index, newText) => {
    const updatedtasks = [...tasks];
    updatedtasks[index].text = newText;
    setTasks(updatedtasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          className="p-2 border border-gray-300 rounded flex-grow"
          placeholder="Add a new task..."
        />
        <button
          onClick={addtask}
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
        >
          {" "}
          Add{" "}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
            editTask={editTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
