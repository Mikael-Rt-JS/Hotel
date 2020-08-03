import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_contain">
        <div className="flex">
          <NavLink className="hdiv_nav" to="/">
            Home{" "}
          </NavLink>
          <br />
          <NavLink className="hdiv_nav" to="/hotels">
            Hotels
          </NavLink>
          <NavLink className="hdiv_nav" to="/weather">Weather</NavLink>
        </div>
        <p>
          Copyright: <span>&copy;</span>All rights reserved 2020.
        </p>
      </div>
    </footer>
  );
}

export { Footer };

/*
 {(var)? <span>...</span> : <Navlink  to='hjjh'/> }

*/