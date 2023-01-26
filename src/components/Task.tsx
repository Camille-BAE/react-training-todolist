import React from "react";
import { TaskType } from "../models/Task"; // pour appeler l'interface
import "./Task.css";

type TaskProps = {
  task: TaskType; // pour appeler l'interface
  deleteTask: (taskId: number) => void;
};

/**autre façon de faire => export const Task = (props: TaskProps) => {
 *  const {task} = props;
} (ou alors const {title} = props.task */
export const Task = ({task, deleteTask}: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} />
          <span className="checkmark"></span>
        </label>
        {/* si on utilise props il faut alors faire {props.task.title} */}
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => console.log("edit")}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};
