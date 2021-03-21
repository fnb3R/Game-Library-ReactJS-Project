import logo from './logo.svg';
import './App.css';
import GameList from './components/Game/GameList'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
        <Header />
        
        <GameList />
      
    </div>
  );
}

export default App;
