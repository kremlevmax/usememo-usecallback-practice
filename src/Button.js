const Button = (props) => {
  console.log("Button is running");
  return <button onClick={props.onClickHandler}>CLICK ME</button>;
};

export default Button;