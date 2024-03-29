import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { verifyUser } from "./services/users.js"
import Landing from "./screens/Landing/Landing.jsx"
import SignIn from "./screens/SignIn/SignIn.jsx"
import SignUp from "./screens/SignUp/SignUp.jsx"
import SignOut from "./screens/SignOut/SignOut.jsx"
import DrawingCanvas from "./screens/DrawingCanvas/DrawingCanvas.jsx";
import Gallery from "./screens/Gallery/Gallery.jsx"
import DrawingDetail from "./screens/DrawingDetail/DrawingDetail.jsx"

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
        <Route exact path="/profile">
          <Profile />
        </Route> */}
        <Route path="/" element={<Landing user={user}/>}/>
        <Route path="/draw" element={<DrawingCanvas user={user} />}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser}/>} />
        <Route path="/sign-up" element={<SignUp setUser={setUser}/>} />
        <Route path="/sign-out" element={<SignOut setUser={setUser}/>}/>
        <Route path="/drawings" element={<Gallery user={user}/>} />
        <Route path="/drawings/:id" element={<DrawingDetail user={user}/>} />
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
