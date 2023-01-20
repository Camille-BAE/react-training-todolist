import React from "react";
import { TaskType } from "../models/Task"; // pour appeler l'interface
import { Task } from "./Task";
import "./TasksList.css"


type TaskListProps = {
  tasks : TaskType[];
}

export const TasksList = ({tasks}: TaskListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) =>
        <Task task={task}/>
      )}
    </div>
  );
};
