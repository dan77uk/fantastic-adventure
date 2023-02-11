import TaskLane from "../components/tasklane/TaskLane";
import styles from "./board.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const taskLanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Completed" },
];

export default function Board() {
  const [loading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:3001/tasks");
        setTasks(result.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.boardWrapper}>
      <section className={styles.boardContainer}>
        {taskLanes.map((lane) => (
          <TaskLane
            key={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tasks={tasks.filter((task) => task.lane === lane.id)}
          />
        ))}
      </section>
    </div>
  );
}
