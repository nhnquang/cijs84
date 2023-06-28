import React, { useState } from "react";
import Task from "./Task";

const Completed = ({ all, setAll }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start w-auto min-w-[250px]">
        {all
          .filter((task) => task.completed)
          .map((task) => (
            <div
              key={task.id}
              className="flex min-w-[250px] justify-between items-center"
            >
              <Task task={task} setToggleUpdate={setToggleUpdate} />
              <button
                value={task.id}
                onClick={(e) => {
                  const removeId = e.target.value;
                  setAll((all) => {
                    const newAll = all.filter((task) => task.id != removeId);
                    localStorage.setItem("all", JSON.stringify(newAll));
                    return newAll;
                  });
                }}
                className="text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-2 border border-red-500 hover:border-transparent rounded"
              >
                Delete
              </button>
            </div>
          ))}
        <button
          onClick={(e) => {
            setAll((all) => {
              const newAll = all.filter((task) => !task.completed);
              localStorage.setItem("all", JSON.stringify(newAll));
              return newAll;
            });
          }}
          className="text-sm bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-2 border border-red-500 hover:border-transparent rounded"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
