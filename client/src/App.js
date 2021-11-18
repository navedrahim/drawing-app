import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { verifyUser } from "./services/users.js"
import Landing from "./screens/Landing/Landing.jsx"
import SignIn from "./screens/SignIn/SignIn.jsx"
import DrawingCanvas from "./screens/DrawingCanvas/DrawingCanvas.jsx";
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Routes>
       {/* <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route> */}
        <Route path="/draw" element={<DrawingCanvas />}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser}/>} />
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
