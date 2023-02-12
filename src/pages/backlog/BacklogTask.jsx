import styles from "./backlog.module.css";

export default function BacklogTask({ title, body }) {
  return (
    <div className={styles.task}>
      <h3>{title}</h3>
    </div>
  );
}
