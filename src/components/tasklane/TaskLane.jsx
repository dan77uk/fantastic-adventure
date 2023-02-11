import styles from "./tasklane.module.css";

export default function TaskLane({ title }) {
  return (
    <div className={styles.laneWrapper}>
      <h2>{title}</h2>
    </div>
  );
}
