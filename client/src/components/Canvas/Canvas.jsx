import Row from "../Row/Row.jsx"
import "./Canvas.css"

function Canvas({ selectedColor, reset, light }){
  const rows = []
  for (let i=0; i < 20; i++){
    rows.push(<Row key={i} selectedColor={selectedColor} reset={reset} light={light}/>)
  }
  return (
    <div className="canvas">
      {rows}
    </div>
  )
}

export default Canvas