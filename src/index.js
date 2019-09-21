import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./styles.css";

const TimerApp = lazy(() => import("./components/TimerApp"));
const TicTacToe = lazy(() => import("./components/TicTacToe"));
const BookList = lazy(() => import("./components/BookList"));
const ShoppingApp = lazy(() => import("./components/ShoppingApp"));
const TypeHead = lazy(() => import("./components/TypeHead/TypeHead"));

function App() {
  return (
    <Router>
      <div className="App container">
        <Navigation />

        <Switch>
          <Suspense fallback={<div>...Loading</div>}>
            <Route exact path="/" component={TimerApp} />
            <Route path="/timerApp" component={TimerApp} />
            <Route path="/autoComplete" component={TypeHead} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/booklist" component={BookList} />
            <Route path="/shoppingApp" component={ShoppingApp} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
