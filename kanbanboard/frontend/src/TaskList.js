import React, { useEffect, useState } from "react";
import Task from "./Task";
import styles from "./assets/css/TaskList.css";

const TaskList = ({ cardNo }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const getTasks = async () => {
    try {
      const res = await fetch("/api/task", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data.data);
      setTasks(data.data);
    } catch (err) {
      console.log("getCard Error: " + err);
    }
  };
  const addNewTask = async () => {
    if (!newTaskName) return;

    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTaskName, done: "N", cardNo }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setTasks([...tasks, newTask.data]);
        setNewTaskName("");
      } else {
        console.error("Task could not be added.");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  const handleInputChange = (e) => {
    setNewTaskName(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };
  return (
    <div>
      <ul>
        {tasks?.map((task) => (
          <Task key={task.no} no={task.no} name={task.name} done={task.done} />
        ))}
      </ul>
      <input
        type="text"
        placeholder={"태스크 추가"}
        className={styles.TaskList__add_task}
        value={newTaskName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default TaskList;
