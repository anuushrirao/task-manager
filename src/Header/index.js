import { useState } from 'react';
import './index.scss';

const Header = ({setButtonState}) => {
  const [buttonColor, setButtonColor] = useState("orangered");
  const [buttonText, setButtonText] = useState("Close");

  const buttonClick = () => {
    console.log("button was clicked");

    if (buttonColor === "orangered") {
      setButtonColor("green");
      setButtonText("Add Task");
      setButtonState("add")
    } else {
      setButtonColor("orangered");
      setButtonText("Close");
      setButtonState("close")
    }
  };

  return (
    <header>
      <h1>Task Manager</h1>
      <button style={{ backgroundColor: buttonColor }} onClick={buttonClick}>
        {buttonText}
      </button>
    </header>
  );
};

export default Header;
