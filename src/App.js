import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Do from '@/pages/do/Do';
import DoContext, {workoutContext} from '@/contexts/doContext';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
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
