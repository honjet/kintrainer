import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Do from '@/pages/do/Do';
import DoContext, {workoutContext} from '@/contexts/doContext';
import Header from './Header';

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <DoContext.Provider value={workoutContext}>
          <Route exact path="/" component={Do} />
        </DoContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
