import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Indian: [
    {
      dishName: "Chole-bathure",
      Ratings: "4.5/5",
      description: "It is very tasty and it is the north indian dish ,made with flour and chick peas"
    },
    {
      dishName: "Samosa",
      Ratings: "4.6/5",
      description: "This is made with potato stuffing in the flour made,and it is deep fry"
    },
    {
      dishName: "Panner-butter-masala",
      Ratings: "4.3/5",
      description: "panner is a type of Indian cheese , it is made in the butter it is very tasty with curry"
    },
    {
      dishName: "Aloo-chat",
      Ratings: "4/5",
      description: "It again made with the potatlo(aloo),it is very tasty made it with different sauces"
    }
  ],
  Italian: [
    {
      dishName: "Pizza",
      Ratings: "4.3/5",
      description:"Pizza is an oven-baked, flat, usually round-shaped bread covered with ingredients such as tomato sauce, cheese, olive oil and optionally other toppings."
    },
    {
      dishName: "Pasta",
      Ratings: "4.2/5",
      description:"Only natural ingredients such as tomatoes, basil, spinach, truffles or cuttlefish ink may be added to color or flavor the dry pasta. "
    },
    {
      dishName: "Bruschetta",
      Ratings: "4/5",
      description:"An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix"
    },
    {
      dishName: "Mozzarela",
      Ratings: "4.2/5",
      description:" Traditionally, Mozzarella referred to a raw, spun cheese obtained through a specific production method (pasta filata method) during which the cheese paste is spun (stretching and kneading it to obtain the right consistency), after which it is cut off to the desired size (mozzare)"
    }
  ],
  Chinese: [
    {
      dishName: "Noodles",
      Ratings: "4/5",
      description:"One of the staples in every home, noodles are not just a kid's favourite snack to binge on but are also equally loved by adults.  "
    },
    {
      dishName: "Dim-sum",
      Ratings: "4/5",
      description:"SumsOne of the most loves street food from the north east, widely popular across northern India now comes to your kitchen! Small bite-sized rounds stuffed with veggies or meat.  "
    },
    {
      dishName: "Spring-rolls",
      Ratings: "4.3/5",
      description:"RollsA crisp appetizer where shredded veggies are encased in thin sheets and then fried golden "
    },
    {
      dishName: "Honey-chilli-potato",
      Ratings: "4/5",
      description:"PotatoThe quintessential Indo-Chinese snack! Honey chilli potato is what you'll find at every Chinese van in and around north India. "
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
            <div>{dish.description}</div>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
