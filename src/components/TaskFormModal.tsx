import React, { useEffect, useState } from "react";
import "./TaskFormModal.css";

type TaskFormModalProps = {
  show: boolean;
  handleClose: () => void;
  addOrEditTask: (event: any, taskId?: number) => void;
  initialValues?: { id: number; title: string; description: string }; // updateTaskState (?)
};

export const TaskFormModal = ({
  show,
  handleClose,
  addOrEditTask,
  initialValues, // updateTaskState (?)
}: TaskFormModalProps) => {
  const [title, setTitle] = useState(initialValues?.title ?? undefined); //updateTaskState?
  const [description, setDescription] = useState(initialValues?.description ?? undefined); // updateTaskState?

  // Use a hook to listen to the initial values changes here
  // const [  ] = useState(0);
  useEffect(() => {
    setTitle(initialValues?.title);

    // code here
  }, [initialValues]);

  useEffect(() => {
    setDescription(initialValues?.description);

    // code here
  }, [initialValues]);

  /*
  pour automatiser tout ça, tu peux aussi faire :
    useEffect(() => {
      setTitle(initialValues?.title);
      setDescription(initialValues?.description);
    }, [initialValues]) */


  if (!show) return null; // pareil à if (show === false) { return null }

  return (
    <div className="modal">
      <section className="modal-main">
        <button
          className="close-btn"
          type="button"
          onClick={() => handleClose()}
        >
          X
        </button>
        <h3>Nouvelle tâche</h3>
        <form // regarde le onSubmit d'en dessous, c'est peut-être un indice
          onSubmit={(e) => addOrEditTask(e, initialValues?.id)} // updateTaskState?
          className="task-form"
        >
          <label>
            <span>Titre</span>
            <input
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description de la tâche"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="form-actions">
            <button type="submit">Enregistrer</button>
            <button onClick={() => handleClose()}>
              Annuler
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
