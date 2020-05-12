import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItemsList } from "../appStore/action";
import { Item } from "../component";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getItemsList } = this.props;
    getItemsList();
  }

  render() {
    const { itemsList } = this.props;
    return (
      <Container>
        {itemsList.map((itemData, index) => (
          <Item key={index} data={itemData} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ item }) => ({ itemsList: item.itemsList });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getItemsList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
