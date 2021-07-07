import React from "react";

const Button = (props) => {
  console.log(`${props.text} button ran`);
  return <button onClick={props.onClickHandler}>{props.text}</button>;
};

export default React.memo(Button);
