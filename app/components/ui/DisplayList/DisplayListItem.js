import React from "react";

const DisplayListItem = ({ children }) => {
  return (
    <li className="text-lg border-b-[1px] border-[#333333] py-4">{children}</li>
  );
};

export default DisplayListItem;
