import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {} from "../appStore/action";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home",
    };
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ item }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
