import { useState, useEffect } from "react"
import Drawing from "../../components/Drawing/Drawing.jsx"
import { getDrawings } from "../../services/drawings.js"
import "./Gallery.css"
function Gallery({ user }){
  const [drawings, setDrawings] = useState([])
  
  useEffect(() => {
    const fetchDrawings = async () => {
      const drawingsArray = await getDrawings()
      setDrawings(drawingsArray)
    }
    fetchDrawings()
  }, [])

  return(
    <div className="gallery">
      {drawings.map(drawing => (
        <Drawing key={drawing.key} drawing={drawing} />
      ))}
    </div>
  )
}

export default Gallery