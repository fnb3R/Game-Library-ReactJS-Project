import '../Forms.css'

const Edit = ({
    match,
    
}) => {
    return (
        <div className="divEx">
            <form action="/auth/register" method="POST" >
                <p>Game Title:</p>
                
                <input type="text" name="title" defaultValue={match.params.id} />
                
                <p>Description:</p>
                <input type="text" name="description" />
                
                <p>Image URL:</p>
                <input type="text" name="imgUrl" />
                <br />
                
                <input type="submit" value="Edit" />

            </form>
        </div>
    )
}

export default Edit;