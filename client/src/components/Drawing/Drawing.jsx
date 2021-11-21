import { Link } from "react-router-dom"
import "./Drawing.css"
function Drawing({ drawing }){
  return(
    <div className="drawing" key={drawing.key}>
      <Link to={`/drawings/${drawing._id}`}><img className="drawing-image" src={drawing.image_url} alt={`drawing by ${drawing.title}`} /></Link>
      <h3>{`by ${drawing.title}`}</h3>
    </div>
  )
}

export default Drawing