import './Game.css'
import { Link } from 'react-router-dom';

function Game(props) {
    return (
        <Link to={"/edit/" + props.id}><article className="gameContainer" >
            <div className="cropImg">
                <img src={props.img} className="gameImg" alt={props.title}></img>
            </div>
            <h3 className="gameTitle">{props.title}</h3>
        </article>
        </Link>
       
    )
}

export default Game;