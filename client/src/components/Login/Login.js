import '../RegisterAndLogin.css'

function Login(props) {
    return (
        <div className="divEx">
            <form action="/auth/login" method="POST">

                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" value="login" />

            </form>
        </div>
    )
}

export default Login;