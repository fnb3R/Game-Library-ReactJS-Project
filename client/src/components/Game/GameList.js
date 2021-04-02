import { Component } from 'react';
import './Game.css';
import Game from './Game';
import gameService from '../../services/GameServices';
class GameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
        }
    }

    componentDidMount() {
        gameService.getAll()
            .then((res) => {
                this.setState({ games: res })
            })
    }

    render() {

        return (
            <div className="gameList">
                <center>
                    <div className="container">
                        <h2 className="homePageTitle">The Game Library</h2>
                    </div>

                    {this.state.games.map(x => {
                        return <Game
                            key={x.key}
                            title={x.title}
                            img={x.imgUrl}
                            id={x.key}
                        />;
                    })}
                </center>
            </div>
        )
    }
}

export default GameList;