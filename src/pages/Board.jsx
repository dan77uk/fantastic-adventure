import TaskLane from "../components/tasklane/TaskLane";
import styles from "./board.module.css";

export default function Board() {
  const taskLanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Completed" },
  ];
  return (
    <div className={styles.boardWrapper}>
      {taskLanes.map((lane) => (
        <TaskLane key={lane.id} title={lane.title} />
      ))}
    </div>
  );
}
