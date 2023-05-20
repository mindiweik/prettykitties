import React from "react";

interface Props {
   clicked: boolean;
   setNumDisplay(state: string) : any ;
   setClicked(state: boolean) : any;
}

const ButtonClicker = (props: Props): JSX.Element => {

  const handleClick = (button: string) : void => {
    props.setNumDisplay(button);
    props.setClicked(!props.clicked);
  }

  return (
    <div>
      <h2>Pretty Kitties</h2>
      <button onClick={() : void => handleClick('one')} > One New Kitty </button>
      <button onClick={() : void => handleClick('ten')} > Ten New Kitties </button>
    </div>
  );
}

export default ButtonClicker;
