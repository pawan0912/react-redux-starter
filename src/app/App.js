import React, { Component } from "react";
import "./App.css";
import ItemsList from "../container/ItemsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <ItemsList />
      </div>
    );
  }
}

export default App;
