import React, { useState } from "react";

const Task = ({ task, setToggleUpdate }) => {
  const [isChecked, setIsChecked] = useState(task.completed);
  return (
    <div className="flex items-center justify-center ">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        checked={isChecked ? true : false}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 "
        onChange={(e) => {
          task.completed = !task.completed;
          setIsChecked(!isChecked);
          if (setToggleUpdate) {
            setToggleUpdate((status) => !status);
          }
        }}
      />
      <label
        htmlFor="default-checkbox"
        className={`ml-2 text-lg font-medium text-slate-900 ${
          isChecked ? "line-through" : ""
        }`}
      >
        {task.name}
      </label>
    </div>
  );
};

export default Task;
