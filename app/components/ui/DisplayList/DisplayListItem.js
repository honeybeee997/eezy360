import React from "react";

const DisplayListItem = ({ children }) => {
  return (
    <li className="text-lg border-b-[1px] border-divider py-4">{children}</li>
  );
};

export default DisplayListItem;
