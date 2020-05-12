import React from "react";
import { Card, Label } from "semantic-ui-react";

const Item = ({ data }) => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>{data.style}</Card.Meta>
      </Card.Content>

      <Card.Content description={data.description} />
      <Card.Content extra>
        <Label tag as="a">
          {data.currencyFormat}
          {data.price}
        </Label>
        {data.isFreeShipping ? (
          <Label color={"green"}>Free Shipping</Label>
        ) : null}
      </Card.Content>
    </Card>
  );
};

export default Item;
