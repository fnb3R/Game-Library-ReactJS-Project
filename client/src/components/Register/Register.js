import '../Forms.css'
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
        if (this.state.password != this.state.passwordRepeat) {
            this.setState(state =>
                ({ errors: { ...state.errors, passwordRepeat: 'Passwords do not match!' } }));
                passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, passwordRepeat: '' } }))
        }

        
        if (this.state.username.length < 3) {
           // console.log('asdsd');
            this.setState(state => 
                ({errors: { ...state.errors, username: 'Your name should be at least 3 characters long!'}}));
                passed = false;
        } 
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, username: '' } }))
        }

        if (this.state.password.length < 3) {
            // console.log('asdsd');
             this.setState(state => 
                 ({errors: { ...state.errors, password: 'Your password should be at least 6 symbols long!'}}));
                 passed = false;
         } 
         else {
             this.setState(state =>
                 ({ errors: { ...state.errors, password: '' } }))
         }

         if (passed) {
             console.log('Send to database!!!!!');
         }
        // if (!this.emailInput.current.value.includes('@')) {
        //     this.setState(state => ({errors: { ...state.errors, email: 'There should be an @ sign' }}));
        //     this.emailInput.current.value = '';
        //     this.emailInput.current.focus();
        // } else {
        //     this.setState(state => ({errors: { ...state.errors, email: '' }}));
        // }
    };

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    

    render() {
        return (
            <div className="center">
                <div className="divEx">
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username}/>
                        {this.state.errors.username &&
                            <div className='input-validation'>{this.state.errors.username}</div>
                        }
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.password}/>
                        {this.state.errors.password &&
                            <div className='input-validation'>{this.state.errors.password}</div>
                        }
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input type="password" name="passwordRepeat" onChange={this.onChangeHandler} value={this.state.passwordRepeat}/>
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