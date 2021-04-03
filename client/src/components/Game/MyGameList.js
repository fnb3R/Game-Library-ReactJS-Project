import { Component } from 'react';
import './Game.css';
import Game from './Game';
import gameService from '../../services/GameServices';
import { auth } from '../../utils/firebase';
class MyGameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
        }
    }

    componentDidMount() {
        console.log(auth.currentUser.uid);    
        gameService.getByOwner(auth.currentUser.uid)
             .then((res) => {
                 this.setState({ games: res })
             })
    }

    render() {

        return (
            <div className="gameList">
                <center>

                    {this.state.games.map(x => {
                        return <Game
                            key={x.key}
                            title={x.title}
                            img={x.imgUrl}
                            id={x.key}
                            owner={x.owner}
                        />;
                    })}
                </center>
            </div>
        )
    }
}

export default MyGameList;