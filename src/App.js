import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Indian: [
    {
      dishName: "Chole-bathure",
      Ratings: "4.5/5"
    },
    {
      dishName: "Samosa",
      Ratings: "4.6/5"
    },
    {
      dishName: "Panner-butter-masala",
      Ratings: "4.3/5"
    },
    {
      dishName: "Aloo-chat",
      Ratings: "4/5"
    }
  ],
  Italian: [
    {
      dishName: "Pizza",
      Ratings: "4.3/5"
    },
    {
      dishName: "Pasta",
      Ratings: "4.2/5"
    },
    {
      dishName: "Bruschetta",
      Ratings: "4/5"
    },
    {
      dishName: "Mozzarela",
      Ratings: "4.2/5"
    }
  ],
  Chinese: [
    {
      dishName: "Noodles",
      Ratings: "4/5"
    },
    {
      dishName: "Dim-sum",
      Ratings: "4/5"
    },
    {
      dishName: "Spring-rolls",
      Ratings: "4.3/5"
    },
    {
      dishName: "Honey-chilli-potato",
      Ratings: "4/5"
    }
  ]
};

export default function App() {
  const [selectedDish, setDish] = useState("Indian");
  function dishClickHandler(dish) {
    setDish(dish);
  }

  return (
    <div className="App">
      <h1>
        FOODY<span>🍔</span>
      </h1>
      <p>checkout the foods ratings</p>
      <div>
        {Object.keys(foodDB).map((genre) => (
          <button onClick={() => dishClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <ul>
        {foodDB[selectedDish].map((dish) => (
          <li key={dish.dishName}>
            <div style={{ fontSize: "30px" }}>{dish.dishName}</div>
            <div>{dish.Ratings}</div>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
