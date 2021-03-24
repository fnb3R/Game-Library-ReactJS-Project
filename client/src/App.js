import logo from './logo.svg';
import './App.css';
import GameList from './components/Game/GameList'
import Register from './components/Register'
import Login from './components/Login'
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route path="/" exact>
          <GameList />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
