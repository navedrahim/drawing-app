import Hole from "../Hole/Hole.jsx"
import "./Row.css"

function Row({ selectedColor, reset, light }){
  const holes = []
  for (let i = 0; i < 20; i++){
    holes.push(<Hole key={i} selectedColor={selectedColor} reset={reset} light={light}/>) 
  }
  return(
    <div className="row">
      {holes}
    </div>
  )
}
export default Row