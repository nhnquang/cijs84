import "./App.css";
import { useState, useEffect } from "react";
import Tab from "./components/Tab";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";

function App() {
  const [all, setAll] = useState([]);
  const [display, setDisplay] = useState("All");

  useEffect(() => {
    const localAll = JSON.parse(localStorage.getItem("all"));
    if (localAll) {
      setAll(localAll);
    }
  }, []);
  return (
    <div className="App pt-5">
      <h1 className="text-3xl font-bold mb-5">#todo</h1>
      <div className="flex justify-center gap-x-2">
        <Tab name="All" display={display} setDisplay={setDisplay} />
        <Tab name="Active" display={display} setDisplay={setDisplay} />
        <Tab name="Completed" display={display} setDisplay={setDisplay} />
      </div>
      <div className="max-w-[280px] h-[2px] bg-slate-300 rounded m-auto my-5"></div>
      {display === "All" && <All all={all} setAll={setAll} />}
      {display === "Active" && <Active all={all} setAll={setAll} />}
      {display === "Completed" && <Completed all={all} setAll={setAll} />}
    </div>
  );
}

export default App;
