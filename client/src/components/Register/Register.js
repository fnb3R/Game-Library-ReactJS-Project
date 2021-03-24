import '../Forms.css'

function Register(props) {
    return (
        <div className="divEx">
            <form action="/auth/register" method="POST" >
                <p>Username</p>
                <input type="text" name="username" />
                <p>Password</p>
                <input type="password" name="password" />
                <p>Repeat Password</p>
                <input type="password" name="passwordRepeat" />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    )
}

export default Register;