import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ foods }) {
  const foodItems = [];
  foods.forEach((foods) => {
    foodItems.push(<FoodListItem></FoodListItem>);
  });
  return (
    <>
      <ul>
        {foods.map((food) => (
          <FoodListItem key={food.no} name={food.name} amount={food.count} />
        ))}
      </ul>
    </>
  );
}

export default FoodList;
