import { Task } from '../models/task.model';

export const getTasks = async (): Promise<Task[]> => [
  { id: 1, title: 'Tarea1', owner: 'Pepe', isCompleted: false },
  { id: 2, title: 'Tarea2', owner: 'Ernestina', isCompleted: false },
];
