import React from "react";

import Text from "../typography/Text";

const Logo = ({ black }) => {
  return (
    <Text el="strong" className="text-4xl !mb-0">
      EEZY
      <Text className={`outlined-text ${black ? "black" : ""}`} el="span">
        360
      </Text>
    </Text>
  );
};

export default Logo;
