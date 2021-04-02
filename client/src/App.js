import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './utils/firebase';
import GameList from './components/Game/GameList';
import Register from './components/Register';
import Login from './components/Login';
import AddGame from './components/AddGame';
import Edit from './components/Edit';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="App">

      <Header {...authInfo}/>
      <Switch>
        <Route path="/" exact>
          <GameList />
        </Route>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
         
        <Route path="/add" exact component={AddGame}  />

        <Route path="/edit/:id" component={Edit} />
        <Route path="/logout" exact render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />

      </Switch>

    </div>
  );
}

export default App;
