import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {} from "../appStore/action";
import {} from "lodash";
import { LineChart } from "react-chartkick";
import "chart.js";

class GraphView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { mapData = {} } = this.props;
    return (
      <Container>
        <LineChart
          data={mapData}
          xtitle="Time"
          ytitle="Expenditure"
          prefix="₹"
        />
      </Container>
    );
  }
}

const getMapData = (itemsList = []) => {
  let mapData = {};
  itemsList
    .sort((a, b) => {
      const date1 = a.date.split("-");
      const date2 = b.date.split("-");
      if (date1[0] !== date2[0]) {
        return parseInt(date1[0]) - parseInt(date2[0]);
      } else if (date1[1] !== date2[1]) {
        return parseInt(date1[1]) - parseInt(date2[1]);
      } else {
        return parseInt(date1[2]) - parseInt(date2[2]);
      }
    })
    .forEach(({ date, amount }) => {
      mapData[date] = parseInt(amount);
    });
  return mapData;
};

const mapStateToProps = ({ item }) => ({
  itemsList: item.itemsList,
  mapData: getMapData(item.itemsList),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphView);
