import React from "react";
import { TaskType } from "../models/Task"; // pour appeler l'interface
import { Task } from "./Task";
import "./TasksList.css"


type TaskListProps = {
  tasks : TaskType[];
  updateTaskState: (taskId: number) => void;
  editTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const TasksList = ({tasks, updateTaskState, editTask, deleteTask}: TaskListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) =>
        <Task task={task} updateTaskState={updateTaskState} editTask={editTask} deleteTask={deleteTask}/> // quand on met des () à une methode, on lui dit en gros qu'elle doit exécuter quelque chose. si on ne veut pas que la méthode s'exécute, il ne faut pas mettre de ()
      )}
    </div>
  );
};
