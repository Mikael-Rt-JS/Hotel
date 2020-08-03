import React from "react";
import { Header } from "./header/Header";
import BusesTaxi from '../../taxi/BusesTaxi';

const Home = React.memo(() => (
  <div>
    <Header />
	  <BusesTaxi />
  </div>
));
export { Home };

// <NavLink to='/One'>One</NavLink>
//  <NavLink to='/two'>Two</NavLink>