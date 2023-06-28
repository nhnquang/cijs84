import React from "react";

const Tab = ({ name, display, setDisplay }) => {
  console.log();
  return (
    <button
      className={`${
        display === name ? "bg-blue-500 text-white" : "bg-transparent"
      } hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
      onClick={() => {
        setDisplay(name);
      }}
    >
      {name}
    </button>
  );
};

export default Tab;
