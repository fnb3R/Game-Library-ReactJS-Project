import '../Forms.css'
import { auth } from '../../utils/firebase';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onSubmitHandler(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((res) => {
                console.log(res);
                this.props.history.push('/');
            }).catch((err) => console.log(err.message));
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="center">
                <div className="divEx">
                    <form >
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.password}/>
                        <input type="submit" value="Login" onClick={this.onSubmitHandler.bind(this)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;