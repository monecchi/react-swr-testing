import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Restaurants from "./Restaurants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1>Testing SWR</h1>
        <p>
          <code>mutate()</code>
        </p>
        <div>
          <hr />
          <p>Incoming data:</p>
        </div>
        <Restaurants />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
