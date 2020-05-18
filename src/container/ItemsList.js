import React, { Component } from "react";
import { Container, Button, Grid } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteItem, toggleAddModal, selectItem } from "../appStore/action";
import { isEmpty } from "lodash";
import { Item } from "../component";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleOnEdit = (item) => {
    const { toggleAddModal, selectItem } = this.props;
    selectItem(item);
    toggleAddModal(true, true);
  };

  handleOnDelete = (item) => {
    const { deleteItem } = this.props;
    deleteItem(item);
  };

  render() {
    const { filteredItemsList = [], budgetList = [] } = this.props;
    return (
      <Container>
        {filteredItemsList.map((itemData, index) => (
          <Grid key={index} columns="2">
            <Grid.Column
              color={budgetList[parseInt(itemData.id)] ? "green" : null}
            >
              <Item data={itemData} />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Grid.Row verticalAlign="middle">
                <Button
                  icon="edit"
                  label="Edit"
                  labelPosition="right"
                  compact
                  onClick={() => this.handleOnEdit(itemData)}
                />
              </Grid.Row>
              <Grid.Row verticalAlign="middle">
                <Button
                  icon="delete"
                  label="Delete"
                  labelPosition="right"
                  negative
                  compact
                  onClick={() => this.handleOnDelete(itemData)}
                />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        ))}
      </Container>
    );
  }
}

const filterItems = (itemsList = [], selectedFilter = "") =>
  isEmpty(selectedFilter)
    ? itemsList
    : itemsList.filter((item) => item.category === selectedFilter);

const getBudget = (itemsList = [], budget = 0) => {
  let budgetList = [];
  let totalBudget = budget;
  itemsList
    .sort((a, b) => parseInt(b.amount) - parseInt(a.amount))
    .forEach(({ id, amount }) => {
      if (totalBudget >= parseInt(amount)) {
        budgetList[parseInt(id)] = true;
        totalBudget = totalBudget - parseInt(amount);
      } else {
        budgetList[parseInt(id)] = false;
      }
    });
  return budgetList;
};
const mapStateToProps = ({ item }) => ({
  itemsList: item.itemsList,
  selectedFilter: item.selectedFilter,
  filteredItemsList: filterItems(item.itemsList, item.selectedFilter),
  budget: item.budget,
  budgetList: getBudget(item.itemsList, item.budget),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteItem, toggleAddModal, selectItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
