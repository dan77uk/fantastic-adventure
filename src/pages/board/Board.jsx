import TaskLane from "../../components/tasklane/TaskLane";
import styles from "./board.module.css";
// import useDataFetching from "../../../hooks/useDataFetching";
import { useState, useEffect } from "react";
// import axios from "axios";
import projectService from "./../../services/projects";

const taskLanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Completed" },
];

export default function Board() {
  // const [loading, error, data] = useDataFetching(
  //   "http://localhost:3001/api/projects"
  // );
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    projectService.getAll().then((response) => {
      setTasks(response);
    });
  }, []);

  function onDragStart(event, id) {
    event.dataTransfer.setData("id", id);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event, laneId) {
    const id = event.dataTransfer.getData("id");
    // optimistic render
    const updatedTasks = tasks.filter((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });
    setTasks(updatedTasks);
    // patch database with updated status
    projectService.moveTask(id, laneId);
  }

  return (
    <div className={styles.boardWrapper}>
      <section className={styles.boardContainer}>
        {taskLanes.map((lane) => (
          <TaskLane
            key={lane.id}
            laneId={lane.id}
            title={lane.title}
            // loading={loading}
            // error={error}
            tasks={tasks.filter((task) => task.lane === lane.id)}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
        ))}
      </section>
    </div>
  );
}
