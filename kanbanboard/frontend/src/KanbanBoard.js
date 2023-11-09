import React, { useEffect, useState } from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";

const KanbanBoard = () => {
  const [cards, setCards] = useState([]);
  const getCard = async () => {
    try {
      const res = await fetch("/api/card", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data.data);
      setCards(data.data);
    } catch (err) {
      console.log("getCard Error: " + err);
    }
  };
  useEffect(() => {
    getCard();
  }, []);
  return (
    <div className={styles.KanbanBoard}>
      <CardList
        key={"To Do"}
        title={"To Do"}
        cards={cards.filter((card) => card.status === "ToDo")}
      />
      <CardList
        key={"Doing"}
        title={"Doing"}
        cards={cards.filter((card) => card.status === "Doing")}
      />
      <CardList
        key={"Done"}
        title={"Done"}
        cards={cards.filter((card) => card.status === "Done")}
      />
    </div>
  );
};

export default KanbanBoard;
