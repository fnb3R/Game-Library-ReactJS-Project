import { Component } from 'react';
import './Game.css';
import Game from './Game';

class GameList extends Component {
    render() {
        return (
            <div className="gameList">
                <center>
                    <h2 className="homePageTitle">The Game Library</h2>
                    <Game title="Crash" img="/crash.png" />
                    <Game title="Crash" img="/crash.png" />
                    <Game title="Crash" img="/crash.png" />
                    <Game title="Crash" img="/crash.png" />
                </center>
            </div>
        )
    }
}

export default GameList;