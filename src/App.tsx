import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"

const App = () => {
  const title = "Camille To do list";
  const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal]= useState(false);

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
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <Header title={title}/>
{/* 
      {tasks.map(obj =>
        <Task task={obj}/>
      )} */}

      <TasksList tasks={tasks} />

      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)} // console.log("this button should open the modal")
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)} // console.log("pass me a method that will close the modal")
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
