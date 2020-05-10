import React from "react";
import { Card, Label } from "semantic-ui-react";

const Item = ({ data }) => {
  return (
    <Card centered>
      <Card.Content header={data.title} />
      <Card.Content description={data.description} />
      <Card.Content extra>
        {/* <Icon name="currency" /> */}
        <Label tag as="a">
          {data.currencyFormat}
          {data.price}
        </Label>
      </Card.Content>
    </Card>
  );
};

export default Item;
