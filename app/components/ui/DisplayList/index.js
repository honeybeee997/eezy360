import React from "react";

import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ items = [], className = "" }) => {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <DisplayListItem key={i}>{item}</DisplayListItem>
      ))}
    </ul>
  );
};

export default DisplayList;
