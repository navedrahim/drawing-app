import Row from "../Row/Row.jsx"
import "./Canvas.css"

function Canvas({ selectedColor, reset }){
  const rows = []
  for (let i=0; i < 20; i++){
    rows.push(<Row key={i} selectedColor={selectedColor} reset={reset}/>)
  }
  return (
    <div className="canvas">
      {rows}
    </div>
  )
}

export default Canvas