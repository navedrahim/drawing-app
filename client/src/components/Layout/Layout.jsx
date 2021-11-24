import "./Layout.css";
import Nav from "../Nav/Nav.jsx"
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <div className>
    <Nav user={props.user}/>
    <div className="layout-children">
      {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout