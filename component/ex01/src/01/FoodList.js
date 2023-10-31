import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList() {
  return (
    <>
      <ul>
        <FoodListItem name={"bread"} amount={10} />
        <FoodListItem name={"egg"} amount={20} />
        <FoodListItem name={"milk"} amount={40} />
      </ul>
    </>
  );
}

export default FoodList;
