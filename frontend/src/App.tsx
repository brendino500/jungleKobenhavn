import React from 'react';
import Home from './common/Home'
import Navbar from './common/Navbar'
import PlantIndividual from './plants/PlantIndividual'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/plants/:id' component={PlantIndividual} />
          </Switch>
    </BrowserRouter>

  );
}

export default App;
