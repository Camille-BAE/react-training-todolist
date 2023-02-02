import React, { useState } from "react";
import "./App.css";
// import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"
import { TaskType } from "./models/Task";

const App = () => {
  const title = "Camille To do list";
  // const tasks = data;
  const [taskToEdit, setTaskToEdit]= useState (null);
  const [showModal, setShowModal]= useState(false);
  const [tasks, setTasks]= useState(data);


  const updateTaskState = (taskId: number) => {
    
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();

    const newTask: TaskType = {
      done: false,
      id: tasks[tasks.length-1].id + 1,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    setTasks([...tasks, newTask]);
    setShowModal(false);

    // 
  };

  const editTask = (taskId: number) => {
    const task = tasks.find((task) => taskId === task.id);
    if (task != null) {
      setTaskToEdit(task);
      setShowModal(true);
    };
    console.log(task);
  };

  const deleteTask = (taskId: number) => {
    // const index = tasks.findIndex((task) => task.id === taskId)
    // tasks.splice(index, 1)
       // => findIndex() s'arrête quand il a trouvé l'item tandis que le filter va analyser tous les items présents dans le tableau et retirer ce qui ne l'intéresse pas.

    const copyTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(copyTasks);

    // setTasks((prev) => prev.filter((task) => task.id !== taskId));
      // on peut aussi le faire comme ça
  };

  return (
    <div className="main">
      <Header title={title}/>
{/* 
      {tasks.map(obj =>
        <Task task={obj}/>
      )} */}

      <TasksList updateTaskState={updateTaskState} editTask={editTask} deleteTask={deleteTask} tasks={tasks} />

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
