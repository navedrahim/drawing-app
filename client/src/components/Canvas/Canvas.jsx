import Row from "../Row/Row.jsx"
import "./Canvas.css"

function Canvas({ selectedColor }){
  const rows = []
  for (let i=0; i < 20; i++){
    rows.push(<Row key={i} selectedColor={selectedColor}/>)
  }
  return (
    <div className="canvas">
      {rows}
    </div>
  )
}

export default Canvas