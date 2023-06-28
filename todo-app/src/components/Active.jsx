import React, { useState } from "react";
import Task from "./Task";

const Active = ({ all }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start w-auto min-w-[250px]">
        {all
          .filter((task) => !task.completed)
          .map((task) => (
            <Task key={task.id} task={task} setToggleUpdate={setToggleUpdate} />
          ))}
      </div>
    </div>
  );
};

export default Active;
