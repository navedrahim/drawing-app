import { useState, useRef } from "react";
import { CompactPicker } from "react-color";
import html2canvas from "html2canvas";
import { uploadFile } from "react-s3";
import Canvas from "../../components/Canvas/Canvas.jsx";
import { createDrawing } from "../../services/drawings.js";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import "./DrawingCanvas.css";

function DrawingCanvas({ user }) {
  const [selectedColor, setColor] = useState("");
  const [reset, setReset] = useState(false);
  const [light, toggleLight] = useState(false);
  const [drawingData, setDrawingData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [drawing, setDrawing] = useState({
    title: "",
    image_url: "",
    user_id: "",
  });
  const navigate = useNavigate();
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
  };

  const handleUpload = async (file) => {
    try {
      const data = await uploadFile(file, config);
      if (data) setDrawingData(data);
      console.log("Here is the data", (drawingData))
      setLoaded(true);
    } catch (error) {
      throw error;
    }
  };

  if (loaded) {
    setDrawing({
      title: user.username,
      image_url: drawingData.location,
      user_id: "12345",
    });
    setLoaded(false)
    const postDrawing = async () => {
      await createDrawing(drawing);
    };
    if (drawing.title.length > 0 && drawing.image_url.length > 0 && drawing.user_id.length > 0) {
      // setLoaded(false);
      postDrawing();
      navigate("/drawings");
    }
  }

  const handleDownloadImage = async () => {
    const element = panelRef.current;
    const canvas = await html2canvas(element);

    canvas.toBlob(function (blob) {
      const blobName = Math.random() * 1000;
      blob.name = `${blobName}.png`;
      handleUpload(blob);
    });
  };

  return (
    <Layout user={user}>
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
              id="compact-picker"
              color={selectedColor}
              onChangeComplete={changeColor}
            />
          </div>
          <div className="button-container">
            <div className="always-buttons">
              <button
                onClick={handleLight}
                style={{ backgroundColor: light ? "yellow" : "lightgray" }}
              >
                Light
              </button>
              <button onClick={handleReset}>Reset</button>
            </div>
            <div className="save-button">
              {user ? (
                <button onClick={handleDownloadImage} className="button">
                  Save
                </button>
              ) : (
                <div className="notice">Sign In to Save Your Creation</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default DrawingCanvas;
