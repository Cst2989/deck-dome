import React from 'react';
import { Switch, Route } from 'react-router-dom';
//styles
import './App.scss';
import Homepage from './pages/Homepage';
import GameRoom from './pages/GameRoom';
import RoomsListing from './pages/RoomsListing';
import AppReducer from './store/reducer.jsx';
import { StateProvider, initialState } from './store/state.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={AppReducer}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/rooms" component={RoomsListing} />
          <Route exact path="/room/:id" component={GameRoom} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
};

export default App;
