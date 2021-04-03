import './Game.css'
import { NavLink } from 'react-router-dom';
import { auth } from '../../utils/firebase';

function Game(props) {

    let matchingUidOwner = false;
    if(auth.currentUser) matchingUidOwner = (auth.currentUser.uid == props.owner);
    
    return (
        <>
            <NavLink to={"/details/" + props.id}>
                <article className="gameContainer" >
                    <div className="cropImg">
                        <img src={props.img} className="gameImg" alt={props.title}></img>
                    </div>
                    <h3 className="gameTitle">{props.title}</h3>
                    {
                        matchingUidOwner
                            ?
                            <NavLink to={"/edit/" + props.id}>Edit</NavLink>
                            :
                            <>
                            </>
                    }
                </article>
            </NavLink>

        </>

    )
}

export default Game;