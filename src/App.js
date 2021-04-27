import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Table from './components/Table';
import Form from './components/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/view" component={Table} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
