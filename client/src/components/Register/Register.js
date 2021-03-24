import '../RegisterAndLogin.css'

function Register(props) {
    return (
        <div className="divEx">
            <form action="/auth/register" method="POST" >

                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="password" name="passwordRepeat" />
                <input type="submit" value="register" />

            </form>
        </div>
    )
}

export default Register;