import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import WillDo from './WillDo';
import Doing from './Doing';
import Done from './Done';

function App(props) {
  return (
    // <Form />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WillDo} />
        <Route path="/doing" component={Doing} />
        <Route path='/done' component={Done} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
