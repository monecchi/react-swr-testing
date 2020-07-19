import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

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
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
