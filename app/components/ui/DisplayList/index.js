import React from "react";

import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <DisplayListItem key={i}>{item}</DisplayListItem>
      ))}
    </ul>
  );
};

export default DisplayList;
