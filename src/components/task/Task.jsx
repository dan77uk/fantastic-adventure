import styles from "./task.module.css";

export default function Task({ title, body }) {
  return (
    <div className={styles.task}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
