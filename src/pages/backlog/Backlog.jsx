import styles from "./backlog.module.css";
import Task from "../../components/task/Task";
import useDataFetching from "../../../hooks/useDataFetching";
import BacklogTask from "./BacklogTask";

export default function Backlog() {
  const [loading, error, tasks] = useDataFetching(
    "http://localhost:3001/tasks"
  );

  return (
    <div className={styles.wrapper}>
      <h2>Outstanding Tasks</h2>
      <div className={styles.container}>
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks
            .filter((task) => {
              return task.lane != 4;
            })
            .map((task) => (
              <BacklogTask key={task.id + task.title} title={task.title} />
            ))
        )}
      </div>
    </div>
  );
}
