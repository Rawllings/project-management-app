import React, { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        text
        hotype="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
