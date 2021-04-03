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
               


                    {this.state.games.map(x => {
                        return <Game
                            key={x.key}
                            title={x.title}
                            img={x.imgUrl}
                            id={x.key}
                            owner={x.owner}
                        />;
                    })}
                
            </div>
        )
    }
}

export default GameList;