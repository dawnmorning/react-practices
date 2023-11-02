import React, { useState, useEffect } from "react";
import styles from "./assets/css/App.css";
import axios from "axios";
function Kanbanboard(props) {
  const [cards, setCards] = useState([]);
  const [isChecked, setIsChecked] = useState({});

  // 데이터 패칭을 담당하는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get("/json/data.json");
      console.log("Data:", response);
      const data = response.data;
      setCards(data);

      // 초기 체크 상태를 설정. 각 태스크의 done 값을 사용.
      const initialCheckState = data.reduce((acc, card) => {
        card.tasks.forEach((task) => {
          acc[task.no] = task.done;
        });
        return acc;
      }, {});
      setIsChecked(initialCheckState);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (taskNo, cardNo) => (event) => {
    const updatedIsChecked = {
      ...isChecked,
      [taskNo]: event.target.checked,
    };
    setIsChecked(updatedIsChecked);

    // cardNo에 해당하는 카드를 찾기
    const currentCard = cards.find((card) => card.no === cardNo);

    // 카드가 있고, tasks가 정의되어 있는지 확인
    if (currentCard && currentCard.tasks) {
      // 모든 태스크의 체크 상태를 검사하여 해당 카드를 "Done" 상태로 업데이트
      const allTasksChecked = currentCard.tasks.every(
        (task) => updatedIsChecked[task.no]
      );
      if (allTasksChecked) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.no === cardNo ? { ...card, status: "Done" } : card
          )
        );
      }
    }
  };

  // 컴포넌트 마운트 시 데이터 패칭
  useEffect(() => {
    fetchData();
  }, []);

  // 상태별로 카드 분류
  const cardsToDo = cards.filter((card) => card.status === "ToDo");
  const cardsDoing = cards.filter((card) => card.status === "Doing");
  const cardsDone = cards.filter((card) => card.status === "Done");

  // 상태별 카드 리스트 렌더링 함수
  const renderCardList = (cards, status) => (
    <div className={styles.CardList}>
      <h1>{status}</h1>
      {cards.map((card) => (
        <div className={styles.Card} key={card.no}>
          <div className={styles.Card__Title}>{card.title}</div>
          <div className={styles.Card__Details}>
            {card.description}
            <div className={styles.TaskList}>
              <ul>
                {card.tasks.map((task) => (
                  <li className={styles.TaskList__Task} key={task.no}>
                    <input
                      type="checkbox"
                      checked={isChecked[task.no] || false}
                      onChange={handleCheckboxChange(task.no)}
                    />
                    {task.name}
                    <a href="#" className={styles.TaskList__Task}></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.KanbanBoard}>
      {renderCardList(cardsToDo, "To Do")}
      {renderCardList(cardsDoing, "Doing")}
      {renderCardList(cardsDone, "Done")}
    </div>
  );
}

export default Kanbanboard;
