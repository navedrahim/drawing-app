import "./Drawing.css"
function Drawing({ drawing }){
  return(
    <div className="drawing" key={drawing.key}>
      <img className="drawing-image" src={drawing.image_url} alt={`drawing by ${drawing.title}`} />
      <h3>{`by ${drawing.title}`}</h3>
    </div>
  )
}

export default Drawing