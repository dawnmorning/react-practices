import React from "react";
import data from "./assets/json/data";
import styles from "./assets/css/App.css";

function Kanbanboard(props) {
  const cardsToDo = data.filter((card) => card.status === "ToDo");
  console.log(cardsToDo);
  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    // 상태 업데이트 로직이 필요하다면 여기에 추가
  };
  return (
    <div className={styles.KanbanBoard}>
      <div className={styles.CardList}>
        <h1>To Do</h1>
        <div className={styles.Card}>
          <div className={styles.Card__Title}>Write some code</div>
          <div className={styles.Card__Details}>
            Code along with the samples in the book
            <div className={styles.TaskList}>
              <ul>
                <li className={styles.TaskList__Task}>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={handleCheckboxChange}
                  />
                  ContactList Example
                  <a href="#" className={styles.TaskList__Task}></a>
                </li>
                <li className={styles.TaskList__Task}>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={handleCheckboxChange}
                  />
                  Kanban Example
                  <a href="#" className={styles.TaskList__Task}></a>
                </li>

                <li className={styles.TaskList__Task}>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={handleCheckboxChange}
                  />
                  My own experiments
                  <a href="#" className={styles.TaskList__Task}></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.CardList}>
        <h1>Doing</h1>

        <div className={styles.Card}>
          <div className={styles.Card__Title}>Read the Book</div>
          <div className={styles.Card__Details}>
            I should read the whole book
            <div className={styles.TaskList}>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.CardList}>
        <h1>Done</h1>
      </div>
    </div>
  );
}

export default Kanbanboard;
