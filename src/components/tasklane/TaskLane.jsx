import styles from "./tasklane.module.css";
import Task from "../task/Task";

export default function TaskLane({
  title,
  laneId,
  loading,
  error,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  return (
    <div
      className={styles.laneWrapper}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, laneId)}
    >
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id + task.title}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
          />
        ))
      )}
    </div>
  );
}
