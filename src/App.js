import React, { useState, useEffect } from "react";
import menu from "./assets/data";
import "./App.css";

function App() {
  let [selectedCategory, setSelectedCategory] = useState("all");
  let [foodList, setFoodList] = useState(menu);

  useEffect(() => {
    let list = menu.filter((food) => selectedCategory === food.category);
    setFoodList(list);
  }, [selectedCategory]);
  let catList = ["all", ...new Set(menu.map((item) => item.category))];

  return (
    <>
      <div>
        <h1>Our menu</h1>
        {catList.map((cat) => (
          <button onClick={() => setSelectedCategory(cat)}>{cat}</button>
        ))}
        {
          // eslint-disable-next-line array-callback-return
          foodList.map((food) => {
            <p>{food.title}</p>;
          })
        }
      </div>
    </>
  );
}

export default App;
