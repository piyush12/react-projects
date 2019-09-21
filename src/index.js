import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import TimerApp from "./components/TimerApp";
import TypeHead from "./components/TypeHead/TypeHead";
import TicTacToe from "./components/TicTacToe";
import BookList from "./components/BookList";
import ShoppingApp from "./components/ShoppingApp";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navigation />

        <Switch>
          <Route exact path="/" component={TimerApp} />
          <Route path="/timerApp" component={TimerApp} />
          <Route path="/autoComplete" component={TypeHead} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/booklist" component={BookList} />
          <Route path="/shoppingApp" component={ShoppingApp} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
