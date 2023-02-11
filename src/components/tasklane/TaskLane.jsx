import styles from "./tasklane.module.css";
import Task from "../task/Task";

export default function TaskLane({ title, loading, error, tasks }) {
  return (
    <div className={styles.laneWrapper}>
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
          />
        ))
      )}
    </div>
  );
}
