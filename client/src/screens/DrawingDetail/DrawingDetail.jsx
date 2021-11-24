import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDrawing, deleteDrawing } from "../../services/drawings";
import Layout from "../../components/Layout/Layout";
import "./DrawingDetail.css";

function DrawingDetail({ user }) {
  const [currentDrawing, setCurrentDrawing] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  
  const handleDelete = async () => {
    await deleteDrawing(params.id);
    navigate("/drawings");
  };
  const deleteButton = (
    <button id="delete-button" onClick={handleDelete}>
      Delete Drawing
    </button>
  );

  useEffect(() => {
    const fetchDrawing = async () => {
      const drawing = await getDrawing(params.id);
      setCurrentDrawing(drawing);
    };
    fetchDrawing();
  }, [params.id]);
  return (
    <Layout user={user}>
      <div className="drawing-detail">
        <img
          className="detail-image"
          src={currentDrawing.image_url}
          alt={`drawing by ${currentDrawing.title}`}
        />
        <div className="detail-text-area">
          <h3 className="detail-user">{`by ${currentDrawing.title}`}</h3>
          <div className="detail-button-container">
            {user?.username == currentDrawing.title ? deleteButton : null}
            <Link to="/drawings">
              <button id="back-button">Back to Gallery</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DrawingDetail;
