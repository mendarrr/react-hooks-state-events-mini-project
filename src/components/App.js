import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDeleteTask(deletedTask) {
    const newTaskList = tasks.filter((task) => {
      return task.text !== deletedTask
    })
    setTask(newTaskList)
  }

  function handleAddTask(newTask) {
    setTask([...tasks, newTask])
  }

  const displayTaskList = tasks.filter((task) => {
    if (category === "All") {
      return true
    } else {
      return task.category === category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} Scategory={category} onCategoryClick={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={displayTaskList} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;