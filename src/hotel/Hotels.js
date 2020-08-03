import React from "react";
import HotelsContext from "../HotelsContext";
import ObjectContext from "./ObjectContext";
import { NavLink } from "react-router-dom";
import {HeaderBtns} from '../../home/header/HeaderBtns';

const Hotels = React.memo(() => {
  return (
    <div>
      <div className="bars_col">
        <div className="bar1">
          <div className="logo">
              <NavLink className="hdiv_nav" to="/">
                Back
              </NavLink>
          </div>
          <HeaderBtns />
        </div>
      </div>
      <HotSection />
    </div>
  );
});
//
/* 
 <div className="bar_hotels">
        <div className="footer_contain">
          <div className="pos">
            <NavLink className="hdiv_nav" to="/">
              Back
            </NavLink>
            <HeaderBtns />
          </div>
        </div>
      </div>
*/
const HotSection = () => {
  return (
    <section className="main_card styler_scroll">
      <h2>Here you can see hotels</h2>
      <p className="p">Which we offer you</p>
      <Container />
    </section>
  );
};
const Container = () => {
  return (
    <div className="container">
      <CardContainer />
    </div>
  );
};
const CardContainer = () => {
  const { hotels } = React.useContext(HotelsContext);
  return (
    <div>
      {hotels.map(m => {
        return (
          <div key={m.id} className="cards_container">
            <ObjectContext.Provider value={{ m }}>
              <Left />
              <Right />
            </ObjectContext.Provider>
          </div>
        );
      })}
    </div>
  );
};
const Left = () => {
  const { m } = React.useContext(ObjectContext);
  return (
    <div className="left">
      <img src={m.imgURL} alt={m.hotelName} />
    </div>
  );
};
const Right = () => {
  return (
    <div className="right">
      <Right1 />
      <Right2 />
      <Right3 />
    </div>
  );
};
const Right1 = () => {
  const { m } = React.useContext(ObjectContext);
  return (
    <div>
      <h3>{m.hotelName}</h3>
      <p>{m.starRaiting} stars</p>
      <p>{m.street}</p>
      <a href={m.ring}>{m.phone}</a>
    </div>
  );
};
const Right2 = () => {
  const { m } = React.useContext(ObjectContext);
  return (
    <div className="abouting_text">
      <p>{m.smallAbout}</p>
    </div>
  );
};
const Right3 = () => {
  const { m } = React.useContext(ObjectContext);
  return (
    <div className="btn_position">
      <span title="Please register and you will be able to reserve a place">
        {m.price} AMD
      </span>
    </div>
  );
};
export { Hotels };
