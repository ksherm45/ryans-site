import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop

  return (

    <nav className="Navbar">

      <Link className="Link" to="/">
      <text className="NavTitle">32 and You</text>
      </Link>

  <div class="Link">
  <Link className="Link" to="/services">
  <button>Services</button>
  </Link>
  <div class="Link-content">
    <Link to="/smallgroup"> Small Group</Link>
    <Link to="/largegroup">Large Group</Link>
    <Link to="/privatetraining">Private Training</Link>
  </div>
  </div>

      <Link className="Link" to="/professionalcareer">
        <button>Professional Career</button>
      </Link>

      <Link className="Link" to="/collegecareer">
        <button>College Career</button>
      </Link>

      <Link className="Link" to="/contact">
        <button>Contact</button>
      </Link>

     
    </nav>
  );
}

export default Navbar;
