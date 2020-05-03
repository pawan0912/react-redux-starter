import React from "react";

const Item = ({ data }) => {
  return (
    <div className="item">
      <h5>{data.id}</h5>
    </div>
  );
};

export default Item;
