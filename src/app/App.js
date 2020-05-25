import React, { Component } from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItemsList } from "../appStore/action";
import { Container, Grid } from "semantic-ui-react";
import { ItemsList, NavHeader, AddModal } from "../container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getItemsList } = this.props;
    getItemsList();
  }

  render() {
    return (
      <Container fluid>
        <NavHeader />
        <Grid as={Container} columns="1">
          <Grid.Column>
            <ItemsList />
          </Grid.Column>
        </Grid>
        <AddModal />
      </Container>
    );
  }
}

const mapStateToProps = ({ item }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getItemsList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
