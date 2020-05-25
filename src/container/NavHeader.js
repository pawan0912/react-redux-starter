import React, { Component } from "react";
import { Menu, Dropdown, Button, Icon } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleAddModal, selectFilter } from "../appStore/action";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.categories = [
      { key: 1, text: "Food & Dining", value: "food_and_dining" },
      { key: 2, text: "Utility", value: "utility" },
      { key: 3, text: "Shopping", value: "shopping" },
      { key: 4, text: "Education", value: "education" },
      { key: 5, text: "Personal Care", value: "personal_care" },
      { key: 6, text: "Travel", value: "travel" },
    ];
  }

  handleAddClick = () => {
    const { toggleAddModal } = this.props;
    toggleAddModal(true, false);
  };

  handleDropdownChange = (e, { value }) => {
    const { selectFilter } = this.props;
    selectFilter(value);
  };

  render() {
    return (
      <Menu>
        <Menu.Item>
          <Icon name="filter" />
          <Dropdown
            clearable
            selection
            placeholder="Filter"
            options={this.categories}
            onChange={this.handleDropdownChange}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button circular icon="add" onClick={this.handleAddClick} />
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = ({ item }) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ toggleAddModal, selectFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
