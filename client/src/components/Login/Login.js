import '../Forms.css'

function Login(props) {
    return (
        <div className="center">
            <div className="divEx">
                <form action="/auth/login" method="POST">

                    <p>Username</p>
                    <input type="text" name="username" />
                    <p>Password</p>
                    <input type="password" name="password" />
                    <br />
                    <br />
                    <br />
                    <input type="submit" value="Login" />

                </form>
            </div>
        </div>
    )
}

export default Login;