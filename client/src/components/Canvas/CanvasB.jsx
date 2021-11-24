import Hole from "../Hole/Hole.jsx"
import "./CanvasB.css"
function CanvasB({ selectedColor, reset, light }){
  const holes = []
  let i = 400
  while (i > 0) {
    holes.push(<Hole key={i} selectedColor={selectedColor} reset={reset} light={light}/>)
    i-=1
  }
  return(
    <div className="canvas-container">
      <div className="canvas-b">
        {holes}
      </div>
    </div>
  )
}

export default CanvasB