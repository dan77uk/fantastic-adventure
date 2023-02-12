import styles from "./task.module.css";

export default function Task({ id, title, body, onDragStart }) {
  return (
    <div
      className={styles.task}
      draggable
      onDragStart={(event) => onDragStart(event, id)}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
