import { useState } from "react"
import "./Hole.css"

function Hole({ selectedColor }){
  const [pegColor, setPegColor] = useState("")
  const [colorSet, setColorSet] = useState(false)
  const handleClick = () => {
    setPegColor(selectedColor)
    setColorSet(true)
  }
  const handleMouseEnter = () => {
    if (!colorSet) setPegColor(selectedColor)
  }

  const handleMouseLeave = () => {
    if (!colorSet) setPegColor("black")
  }
  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: pegColor}} className="hole">

    </div>
  )
}

export default Hole