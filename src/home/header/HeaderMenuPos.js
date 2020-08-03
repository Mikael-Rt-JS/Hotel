import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMenuPos = () => (
  <div className="menu_pos" id="">
    <NavLink className="b" to="/">
      Home
    </NavLink>
    <NavLink className="a" to="/hotels">
      Hotels
    </NavLink>
    <NavLink className="a" to="/weather">
      Weather
    </NavLink>
  </div>
);

export { HeaderMenuPos };
