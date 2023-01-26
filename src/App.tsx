import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"

const App = () => {
  const title = "Camille To do list";
  // const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal]= useState(false);
  const [tasks, setTasks]= useState(data);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    const copyTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(copyTasks);
    // setTasks((prev) => prev.filter((task) => task.id !== taskId)); <= on peut aussi le faire comme ça
  };

  return (
    <div className="main">
      <Header title={title}/>
{/* 
      {tasks.map(obj =>
        <Task task={obj}/>
      )} */}

      <TasksList deleteTask={deleteTask} tasks={tasks} />

      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)} // <= this button should open the modal
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)} // <= pass me a method that will close the modal
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
