import React from "react";

import Text from "../typography/Text";

const Logo = () => {
  return (
    <Text el="strong" className="text-4xl !mb-0">
      EEZY
      <Text className="outlined-text" el="span">
        360
      </Text>
    </Text>
  );
};

export default Logo;
