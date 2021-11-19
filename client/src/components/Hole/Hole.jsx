import { useState, useEffect } from "react";
import "./Hole.css";

function Hole({ selectedColor, reset, light }) {
  const [pegColor, setPegColor] = useState("");
  const [colorSet, setColorSet] = useState(false);
  
  const handleClick = () => {
    setPegColor(selectedColor);
    setColorSet(true);
  };

  const handleMouseEnter = () => {
    if (!colorSet) setPegColor(selectedColor);
  };

  const handleMouseLeave = () => {
    if (!colorSet) setPegColor("black");
  };
  
  useEffect(() => {
    if (reset) {
      setPegColor("black")
      setColorSet(false)
    }
    }, [reset])
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: pegColor }}
      className={light && colorSet ? "hole light" : "hole"}
    ></div>
  );
}

export default Hole;
