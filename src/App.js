import "./App.css";
import Button from "./Button";
import Output from "./Output";

import { useState } from "react";

function App() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const onClickHandler = (event) => {
    event.preventDefault();
    setButtonIsClicked((buttonIsClicked) => !buttonIsClicked);
  };

  console.log("Main is running");
  return (
    <div className='App'>
      <Button onClickHandler={onClickHandler} />
      <Output />
    </div>
  );
}

export default App;
