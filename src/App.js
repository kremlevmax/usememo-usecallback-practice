import "./App.css";
import Button from "./Button";
import Output from "./Output";

import { useState, useCallback } from "react";

function App() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  // Here is a useCallback use case. Button doesnt rerender until new porps passed.
  // function of the button wrapped by useCallback and button component
  // is exported through React.memo

  const onClickHandler = useCallback(() => {
    setButtonIsClicked((buttonIsClicked) => !buttonIsClicked);
  }, []);

  console.log("Main is running");
  return (
    <div className='App'>
      <Button onClickHandler={onClickHandler} />
      <Output />
    </div>
  );
}

export default App;
