import { Component } from 'react';

import Game from './Game';

class GameList extends Component {
    render() {
        return (
            <div className="gameList">
                <h2 className="homePageTitle">The Game Library</h2>
                <Game />
                
            </div>
        )
    }
}

export default GameList;