import { Route, Routes } from "react-router-dom"
import Landing from "./screens/Landing/Landing.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
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
        </Route>
        <Route exact path="/draw">
          <DrawingCanvas />
        </Route>
        <Route exact path="/drawings">
          <Gallery />
        </Route>
        <Route exact path="/drawings/:id">
          <DrawingDetail />
        </Route>
        <Route exact path="/drawings/:id/edit">
          <EditDrawing />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
