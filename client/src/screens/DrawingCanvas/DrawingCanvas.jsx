import { useState, useEffect } from "react";
import { CompactPicker } from "react-color";
import Canvas from "../../components/Canvas/Canvas.jsx";
import "./DrawingCanvas.css";
function DrawingCanvas() {
  const [selectedColor, setColor] = useState("");
  const [reset, setReset] = useState(false);
  const [light, toggleLight] = useState(false)
  const changeColor = (color) => {
    setColor(color.hex);
    setReset(false);
  };
  const handleLight = () => {
    toggleLight(!light)
  }
  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 10)
  };
  

  return (
    <div className="drawing-canvas">
      <div className="drawing-container">
        <div className="drawing-area">
          <Canvas selectedColor={selectedColor} reset={reset} light={light} />
        </div>
        <div className="tools-area">
        <div className="color-picker">
          <CompactPicker color={selectedColor} onChangeComplete={changeColor} />
        </div>
        <div className="button-container">
          <button onClick={handleLight} style={{backgroundColor: light ? "yellow" : "gray"}}>Light</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DrawingCanvas;
