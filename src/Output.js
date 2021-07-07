import React from "react";

const Output = () => {
  console.log("Output ran");
  return <div>TEST DIV</div>;
};

// Basic use case of React.memp. Component won't be rerendered until props change
export default React.memo(Output);
