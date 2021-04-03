import logo from './logo.svg';
import { useEffect, useState } from 'react';
import gameService from '../src/services/GameServices';
import './App.css';
import { auth } from './utils/firebase';
import GameList from './components/Game/GameList';
import Register from './components/Register';
import Login from './components/Login';
import AddGame from './components/AddGame';
import Edit from './components/Edit';
import Intro from './components/Intro';
import MyGameList from './components/Game/MyGameList';
import Details from './components/Details';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/"   component={Header} />
      </Switch>

        <Switch>
          <Route path="/home" exact component={GameList} />
          <Route path="/my-games" exact component={MyGameList} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />

          <Route path="/add" exact component={AddGame} />

          <Route path="/edit/:id" component={Edit} />
          <Route path="/details/:id" component={Details} />
          <Route path="/logout" exact render={() => {
            auth.signOut();
            return <Redirect to="/home" />
          }} />

        </Switch>
        

    </div>
  );
}

export default App;
