import React from "react";
import { Card, Label, Grid } from "semantic-ui-react";

const CATEGORIES = {
  food_and_dining: "Food & Dining",
  utility: "Utility",
  shopping: "Shopping",
  education: "Education",
  personal_care: "Personal Care",
  travel: "Travel",
};

const Item = ({ data }) => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>{data.description}</Card.Header>
        <Label attached="top right">{CATEGORIES[data.category]}</Label>
      </Card.Content>
      <Card.Content extra>
        <Grid centered columns={2}>
          <Grid.Column>
            <Label basic circular>
              {data.date}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Label basic color="green">
              ₹ {data.amount}
            </Label>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default Item;
