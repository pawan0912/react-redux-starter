import React, { Component } from "react";
import { Modal, Form } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  toggleAddModal,
  createItem,
  updateItem,
  selectItem,
} from "../appStore/action";
import { get, isEmpty } from "lodash";

const INITIAL_STATE = {
  description: "",
  amount: 0,
  date: "",
  category: "",
};

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.categories = [
      { text: "Food & Dining", value: "food_and_dining" },
      { text: "Utility", value: "utility" },
      { text: "Shopping", value: "shopping" },
      { text: "Education", value: "education" },
      { text: "Personal Care", value: "personal_care" },
      { text: "Travel", value: "travel" },
    ];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.showAddModal !== this.props.showAddModal &&
      this.props.showAddModal === true
    ) {
      const { editMode, selectedItem } = this.props;
      if (editMode && !isEmpty(selectedItem)) {
        this.setState({
          description: get(selectedItem, "description", ""),
          amount: get(selectedItem, "amount", ""),
          date: get(selectedItem, "date", ""),
          category: get(selectedItem, "category", ""),
        });
      }
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleOnClose = () => {
    const { toggleAddModal, selectItem } = this.props;
    toggleAddModal(false, false);
    selectItem({});
    this.setState({ ...INITIAL_STATE });
  };

  handleOnSubmit = (event, data) => {
    const {
      toggleAddModal,
      createItem,
      updateItem,
      editMode,
      selectedItem,
      selectItem,
    } = this.props;
    const { description, amount, date, category } = this.state;
    if (editMode) {
      updateItem({
        id: selectedItem.id,
        description: description,
        amount: amount.toString(),
        date: date,
        category: category,
      });
    } else {
      createItem({
        description: description,
        amount: amount.toString(),
        date: date,
        category: category,
      });
    }
    toggleAddModal(false, false);
    selectItem({});
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { showAddModal, editMode } = this.props;
    const { description, amount, date, category } = this.state;
    return (
      <Modal open={showAddModal} onClose={this.handleOnClose}>
        <Modal.Header>Add an expense</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleOnSubmit}>
            <Form.Input
              required
              label="Description"
              name="description"
              value={description}
              type="text"
              onChange={this.handleChange}
            />
            <Form.Input
              required
              label="Cost"
              name="amount"
              value={amount}
              type="number"
              onChange={this.handleChange}
            />
            <Form.Input
              required
              label="Date"
              name="date"
              value={date}
              type="date"
              onChange={this.handleChange}
            />
            <Form.Select
              required
              label="Category"
              name="category"
              value={category}
              options={this.categories}
              onChange={this.handleChange}
            />
            <Form.Button
              type="submit"
              label="Create"
              content={editMode ? "Update" : "Create"}
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = ({ item }) => ({
  showAddModal: item.showAddModal,
  editMode: item.editMode,
  selectedItem: item.selectedItem,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { toggleAddModal, createItem, updateItem, selectItem },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
