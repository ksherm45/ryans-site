import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Headroom from "react-headroom";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop

  return (
<Headroom>
    <nav className="Navbar" id="navs">

      <HashLink className="Link" smooth to="/#top">
      <text className="NavTitle">32 & YOU</text>
      </HashLink>

  <div class="Link">
  <HashLink className="Link" smooth to="/#training">
  <button>SERVICES</button>
  </HashLink>
  <div class="Link-content">
    <Link to="/smallgroup"> Small Group</Link>
    <Link to="/largegroup">Large Group</Link>
    <Link to="/privatetraining">Private Training</Link>
  </div>
  </div>
      <HashLink className="Link" smooth to="/#career">
        <button>CAREER</button>
      </HashLink>

      <HashLink className="Link" smooth to="/#contact">
        <button>CONTACT</button>
      </HashLink>
    </nav>
    </Headroom>
  );
}

export default Navbar;
