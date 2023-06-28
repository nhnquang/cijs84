import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";

const All = ({ all, setAll }) => {
  const [task, setTask] = useState("");

  return (
    <div className="flex flex-col items-center">
      <form
        className="mb-6 flex max-w-[400px] m-auto gap-2 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const newTaskName = document.getElementById("taskInput").value;
          const newTask = {
            id: uuidv4(),
            name: newTaskName,
            completed: false,
          };
          setAll((all) => {
            const newAll = [...all, newTask];
            localStorage.setItem("all", JSON.stringify(newAll));
            return newAll;
          });
          setTask("");
        }}
      >
        <input
          id="taskInput"
          type="text"
          className="pl-3 border-2 border-slate-300 rounded"
          placeholder="add task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add
        </button>
      </form>

      <div className="flex flex-col items-start w-auto min-w-[250px]">
        {all.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default All;
