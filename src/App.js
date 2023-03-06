import React from "react";
import "./scss/app.scss";

import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaBlock } from "./components/PizzaBlock";

import pizzas from "./assets/pizzas.json";

function App() {
  fetch('https://6405853940597b65de392e56.mockapi.io/item').then((res) => {
    return res.json()
  })
  .then((arr) => {
    console.log(arr)
  })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
