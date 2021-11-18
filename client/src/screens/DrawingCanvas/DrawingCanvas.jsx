import { useState } from "react";
import { CompactPicker } from "react-color";
import Canvas from "../../components/Canvas/Canvas";
import "./DrawingCanvas.css";
function DrawingCanvas() {
  const [selectedColor, setColor] = useState("");
  const [reset, setReset] = useState(false);
  const changeColor = (color) => {
    setColor(color.hex);
    setReset(false);
  };
  const handleReset = () => {
    setReset(true);
  };
  return (
    <div className="drawing-canvas">
      <div className="drawing-container">
        <div className="drawing-area">
          <Canvas selectedColor={selectedColor} reset={reset} />
        </div>
        <div className="color-picker">
          <CompactPicker color={selectedColor} onChangeComplete={changeColor} />
        </div>
        <div className="reset-button">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default DrawingCanvas;
