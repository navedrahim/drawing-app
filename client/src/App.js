import { Route, Routes } from "react-router-dom"
import Landing from "./screens/Landing/Landing.jsx"
import DrawingCanvas from "./screens/DrawingCanvas/DrawingCanvas.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
       {/* <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route> */}
        <Route path="/draw" element={<DrawingCanvas />}/>
        {/* <Route exact path="/drawings">
          <Gallery />
        </Route>
        <Route exact path="/drawings/:id">
          <DrawingDetail />
        </Route>
        <Route exact path="/drawings/:id/edit">
          <EditDrawing />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
