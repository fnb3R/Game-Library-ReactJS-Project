import '../Forms.css'
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    onSubmitHandler(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="center">
                <div className="divEx">
                    <form >
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        <input type="submit" value="Login" onClick={this.onSubmitHandler.bind(this)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;