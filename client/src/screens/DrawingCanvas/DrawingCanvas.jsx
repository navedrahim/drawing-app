import { useState } from "react"
import { CirclePicker } from "react-color"
import Canvas from "../../components/Canvas/Canvas"
function DrawingCanvas(){
  const [selectedColor, setColor] = useState("")
  const changeColor = color => setColor(color.hex)
  return (
  
    <div className="drawing-canvas">
      <Canvas selectedColor={selectedColor}/>
      <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>
    </div>
  )
}

export default DrawingCanvas