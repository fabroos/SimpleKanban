import { useEffect, useState } from "react";

export function useTasks(initialList) {
  const [tasks, setTasks] = useState(initialList);
  return { tasks, setTasks };
}
