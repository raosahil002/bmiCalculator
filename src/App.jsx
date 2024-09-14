import React, { useMemo, useState } from "react";
import './App.css';
const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const onHChange =(e)=>{
      setHeight(e.target.value);
  };

  const onWChange =(e)=>{
    setWeight(e.target.value);
  };

  const output = useMemo(()=>{
    const calheight = height/100;

    return (weight/(calheight*calheight)).toFixed(1)
 },[weight,height]);


  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">weight:{weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40 "
          max="200"
          onChange={onWChange}
        />

        <p className="slider-output">height:{height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="120"
          max="250"
          onChange={onHChange}
        />
        <div className="output-section">
          <p>Your BMI is</p>
          <p className="output">{output}</p>
        </div>
      </div>
    </main>
  );
};

export default App;
