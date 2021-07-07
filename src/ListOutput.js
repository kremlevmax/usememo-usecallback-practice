import React from "react";
import { useMemo } from "react";
const ListOutput = (props) => {
  console.log("ListOutput ran");

  const list = useMemo(
    () => props.numbers.map((item) => <li key={item}>{item}</li>),
    [props.numbers]
  );
  return <ul>{list}</ul>;
};

export default React.memo(ListOutput);
