import React from "react";

function FoodListItem({ name, amount }) {
  return (
    <li>
      {name} : {amount}
    </li>
  );
}

export default FoodListItem;
