import './Game.css'

function Game(props) {
    return (
        <a href="/"><article className="gameContainer">
            <div className="cropImg">
                <img src={props.img} className="gameImg"></img>
            </div>
            <h3 className="gameTitle">{props.title}</h3>
        </article>
        </a>
    )
}

export default Game;