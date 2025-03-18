import React, { useState } from "react";

function ToDoItem({ task, index, toggleComplete, removeTask, editTask }) {
  const [isediting, setisediting] = useState(false);
  const [newtext, setNewText] = useState(task.text);

  const handleUpdate = () => {
    editTask(index, newtext);
    setisediting(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md my-2 border border-gray-300">
      <button
        onClick={() => toggleComplete(index)}
        className={`mr-3 text-2xl font-bold ${
          task.completed ? "text-green-500" : "text-gray-400"
        }`}
      >
        {task.completed ? "✅" : "⭕"}
      </button>
      {isediting ? (
        <input
          type="text"
          value={newtext}
          onChange={(e) => setNewText(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      ) : (
        <span
          className={`flex-1 text-lg ${
            task.completed ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {" "}
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        {" "}
        {isediting ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Save{" "}
          </button>
        ) : (
          <>
            <button
              onClick={() => setisediting(true)}
              className="text-blue-500 hover:text-blue-600 text-xl"
            >
              {" "}
              ✏
            </button>

            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-600 text-xl"
            >
              {" "}
              🗑
            </button>
          </>
        )}{" "}
      </div>
    </div>
  );
}

export default ToDoItem;
