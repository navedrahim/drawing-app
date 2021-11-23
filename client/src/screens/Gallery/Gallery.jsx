import { useState, useEffect } from "react";
import Drawing from "../../components/Drawing/Drawing.jsx";
import { getDrawings, deleteDrawing } from "../../services/drawings.js";
import Layout from "../../components/Layout/Layout.jsx";
import "./Gallery.css";
function Gallery({ user }) {
  const [drawings, setDrawings] = useState([]);
  const filteredDrawings = []
  drawings.forEach((drawing, index) => {
    if (index % 2 !== 0) {
      filteredDrawings.push(drawing)
    }
  })
  useEffect(() => {
    const fetchDrawings = async () => {
      const drawingsArray = await getDrawings();
      setDrawings(drawingsArray);
    };
    fetchDrawings();
  }, []);

  return (
    <Layout user={user}>
      <div className="gallery">
        {filteredDrawings.map((drawing) => (
          <Drawing key={drawing.key} drawing={drawing} />
        ))}
      </div>
    </Layout>
  );
}

export default Gallery;
