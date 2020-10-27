import React from "react";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import PlantIndividual from "./plants/PlantIndividual";
import PlantIndex from "./plants/PlantIndex";
import Contact from "./about/Contact";
import Checkout from "./checkout/Checkout";
import ShippingAddress from "./checkout/ShippingAddress";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BasketProvider } from "./providers/BasketContext";

function App() {
  return (
    <BrowserRouter>
      <BasketProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/plants/:id" component={PlantIndividual} />
          <Route path="/plants" component={PlantIndex} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={ShippingAddress} />
        </Switch>
      </BasketProvider>
    </BrowserRouter>
  );
}

export default App;
