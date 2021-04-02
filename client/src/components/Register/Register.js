import '../Forms.css'
import { auth } from '../../utils/firebase';
import React, { Component } from 'react';

class Register extends Component {
   
    constructor(props) {
                                                                                    
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordRepeat: '',
            errors: {
                username: '',
                password: '',
                passwordRepeat: ''
            }
        };

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let passed = true;
       
        if (this.state.password !== this.state.passwordRepeat) {
            this.setState(state =>
                ({ errors: { ...state.errors, passwordRepeat: 'Passwords do not match!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, passwordRepeat: '' } }))
        }

        if (this.state.username.length < 3) {
            this.setState(state =>
                ({ errors: { ...state.errors, username: 'Your name should be at least 3 characters long!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, username: '' } }))
        }

        if (this.state.password.length < 3) {
            this.setState(state =>
                ({ errors: { ...state.errors, password: 'Your password should be at least 6 symbols long!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, password: '' } }))
        }

        if (passed) {
            auth.createUserWithEmailAndPassword(this.state.username, this.state.password)
                .then((res) => {
                    console.log(res);
                    this.props.history.push('/');
                });
        }
    };

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    

    render() {
        return (
            <div className="center">
                <div className="divEx">
                    <form>
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username} />
                        {this.state.errors.username &&
                            <div className='input-validation'>{this.state.errors.username}</div>
                        }
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.password} />
                        {this.state.errors.password &&
                            <div className='input-validation'>{this.state.errors.password}</div>
                        }
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input type="password" name="passwordRepeat" onChange={this.onChangeHandler} value={this.state.passwordRepeat} />
                        {this.state.errors.passwordRepeat &&
                            <div className='input-validation'>{this.state.errors.passwordRepeat}</div>
                        }
                        <input type="submit" value="Register" onClick={this.onSubmitHandler.bind(this)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;