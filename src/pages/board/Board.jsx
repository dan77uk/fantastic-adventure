import TaskLane from "../../components/tasklane/TaskLane";
import styles from "./board.module.css";
import useDataFetching from "../../../hooks/useDataFetching";

const taskLanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Completed" },
];

export default function Board() {
  const [loading, error, tasks] = useDataFetching(
    "http://localhost:3001/tasks"
  );

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
