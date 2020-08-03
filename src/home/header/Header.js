import React from "react";
import { HeaderBar } from "./HeaderBar";
import {HeaderMenu} from './HeaderMenu';
import {HeaderTitle} from './HeaderTitle';

const Header = () => (
  <header className="header">
    <HeaderBar />
	<HeaderMenu />
    <HeaderTitle /> 
  </header>
);

export { Header };