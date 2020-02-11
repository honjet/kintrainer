import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Do from '@/pages/do/Do';
import DoContext, {workoutContext} from '@/contexts/doContext';
import Header from '@/components/Header';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <DoContext.Provider value={workoutContext}>
            <Route exact path="/" component={Do} />
          </DoContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
