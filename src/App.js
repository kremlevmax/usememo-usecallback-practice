import "./App.css";
import Button from "./Button";
import Output from "./Output";

import { useState, useCallback, useMemo } from "react";
import ListOutput from "./ListOutput";

function App() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [approve, setApprove] = useState(false);

  // Here is a useCallback use case. Button doesnt rerender until new porps passed.
  // function of the button wrapped by useCallback and button component
  // is exported through React.memo

  const onClickHandler = useCallback(() => {
    if (approve) setButtonIsClicked((buttonIsClicked) => !buttonIsClicked);
  }, [approve]);

  const onClickApproveHandler = () => {
    setApprove((approve) => (approve = true));
  };
  const numbers = useMemo(() => [3, 4, 5, 7], []);

  console.log("Main ran");
  return (
    <div className='App'>
      <Button onClickHandler={onClickApproveHandler} text={"Give Approve"} />
      <Button onClickHandler={onClickHandler} text='Click Me' />

      <ListOutput numbers={numbers} />
    </div>
  );
}

export default App;
