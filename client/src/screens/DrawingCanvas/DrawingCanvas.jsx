import { useState, useEffect, useRef } from "react";
import { CompactPicker } from "react-color";
import { uploadFile } from "react-s3";
import { exportComponentAsPNG } from "react-component-export-image";
import Canvas from "../../components/Canvas/Canvas.jsx";
import "./DrawingCanvas.css";
function DrawingCanvas() {
  const [selectedColor, setColor] = useState("");
  const [reset, setReset] = useState(false);
  const [light, toggleLight] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null)

  const panelRef = useRef();
  const changeColor = (color) => {
    setColor(color.hex);
    setReset(false);
  };
  const handleLight = () => {
    toggleLight(!light);
  };
  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 10);
  };

  const S3_BUCKET = "drawingbucket";
  const REGION = "us-east-1";
  const ACCESS_KEY = "AKIASLD6MA5EV26KBT57";
  const SECRET_ACCESS_KEY = "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";

  const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  }
//   const handleFileInput = (e) => {
//     setSelectedFile(e.target.files[0]);
// }
  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }


  return (
    <div className="drawing-canvas">
      <div className="drawing-container">
        <div className="drawing-area">
          <Canvas
            selectedColor={selectedColor}
            reset={reset}
            light={light}
            panelRef={panelRef}
          />
        </div>
        <div className="tools-area">
          <div className="color-picker">
            <CompactPicker
              color={selectedColor}
              onChangeComplete={changeColor}
            />
          </div>
          <div className="button-container">
            <button
              onClick={handleLight}
              style={{ backgroundColor: light ? "yellow" : "gray" }}
            >
              Light
            </button>
            <button onClick={handleReset}>Reset</button>
  
            <button
              onClick={() => handleUpload(exportComponentAsPNG(panelRef))}
              className="button"
            >
              Save
            </button>
          </div>
          {/* <div className="upload">
          <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DrawingCanvas;
