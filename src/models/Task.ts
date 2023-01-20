export interface TaskType {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

// export default TaskType; => pour englober tout le fichier mais c'est mieux de export élément part élément comme dans l'exemple ci-dessus
