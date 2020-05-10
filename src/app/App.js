import React, { Component } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import ItemsList from "../container/ItemsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container fluid>
        <ItemsList />
      </Container>
    );
  }
}

export default App;
