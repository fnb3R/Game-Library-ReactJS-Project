import '../Forms.css'

function AddGame(props) {
    return (
        <div className="center">
            <div className="divEx">
                <form action="/auth/register" method="POST" >
                    <p>Game Title:</p>

                    <input type="text" name="title" />

                    <p>Description:</p>
                    <input type="text" name="description" />

                    <p>Image URL:</p>
                    <input type="text" name="imgUrl" />
                    <br />

                    <input type="submit" value="Add" />

                </form>
            </div>
        </div>
    )
}

export default AddGame;