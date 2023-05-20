import React, { useState, useEffect } from "react";
import "./App.css";
import "./MiniComponents/ButtonClicker";
import ButtonClicker from "./MiniComponents/ButtonClicker";
import axios from "axios";
import CatInterface from "./interface";
import DisplayPics from "./MiniComponents/DisplayPics";

function App() {
  const [numDisplay, setNumDisplay] = useState("");
  const [catPics, setCatPics] = useState<CatInterface>();
  const [urlPresent, setUrlPresent] = useState(false);
  const [clicked, setClicked] = useState(false);

  const catCall = (limit: string): void => {
    let numberToUse: number = 1;
    if (limit === "ten") {
      numberToUse = 10;
    }

    axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=${numberToUse}`)
      .then((cat) => {
        setUrlPresent(true);
        setCatPics(cat.data);
      })
      .catch((err) => {
        throw new Error("No cat data", err);
      });
  };

  useEffect((): void => {
    catCall(numDisplay);
  }, [clicked, numDisplay]);

  
  return (
    <div className="App">
      <header className="App-header">
        <ButtonClicker
          setNumDisplay={setNumDisplay}
          clicked={clicked}
          setClicked={setClicked}
        />
        {urlPresent && 
          <div className="container">
            <DisplayPics pics={catPics} />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
