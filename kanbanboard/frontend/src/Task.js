import React from "react";
import styles from "./assets/css/Task.css";

const Task = ({ no, name, done }) => {
  const handleDelete = async () => {
    if (!no) return; // no가 없다면 함수 종료

    try {
      const response = await fetch(`/api/task/${no}`, {
        method: "DELETE", // DELETE 요청
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`Task no ${no} deleted`);
        alert("삭제 완료");
      } else {
        console.error("Failed to delete the task.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  return (
    <li className={styles.Task}>
      <input type="checkbox" checked={done === "Y"} onChange={(e) => {}} />
      {name}
      <button onClick={handleDelete} className={styles.Task__remove}>
        Delete
      </button>
    </li>
  );
};
export default Task;
