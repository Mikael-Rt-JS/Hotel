import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "../home/Home";
import HotelsContext from "./HotelsContext";
import { Hotels } from "../hotel/Hotels";
import hotels from "./hotels.json";
import { Footer } from "../footer/Footer";
import Weather from "../weather/Weather";

function App() {
  return (
    <div>
      <div>
        <HotelsContext.Provider value={{ hotels }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </HotelsContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
const a = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(a, document.querySelector("#app"));
