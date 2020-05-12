import React, { Component } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { ItemsList, NavHeader } from "../container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container fluid className="app">
        <NavHeader />
        <ItemsList />
      </Container>
    );
  }
}

export default App;
