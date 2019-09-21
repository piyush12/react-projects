import React from "react";
import ReactDOM from "react-dom";
import TimerApp from "./TimerApp";
import TypeHead from "./TypeHead/TypeHead";
import TicTacToe from "./TicTacToe";
import BookList from "./BookList";
import ShoppingApp from "./ShoppingApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ShoppingApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
