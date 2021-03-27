import '../Forms.css'
import React, { Component } from 'react';

class AddGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
            errors: {
                title: '',
                description: '',
                imgUrl: '',
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler(e) {

        e.preventDefault();
        let passed = true;

        if (!this.state.title) {
            this.setState(state =>
                ({ errors: { ...state.errors, title: 'The game must have a title!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, title: '' } }))
        }

        if (!this.state.description) {
            this.setState(state =>
                ({ errors: { ...state.errors, description: 'The game must have a description!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, description: '' } }))
        }

        if (!(this.state.imgUrl.includes('http://') || (this.state.imgUrl.includes('https://')))) {
            this.setState(state =>
                ({ errors: { ...state.errors, imgUrl: 'URL is invalid!' } }));
            passed = false;
        }
        else {
            this.setState(state =>
                ({ errors: { ...state.errors, imgUrl: '' } }))
        }

        if (passed) {
            console.log('Send to database!!!!!');
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
                        <label htmlFor="title">Game Title:</label>
                        <input type="text" name="title" onChange={this.onChangeHandler} value={this.state.title} />
                        {this.state.errors.title &&
                            <div className='input-validation'>{this.state.errors.title}</div>
                        }
                        <label htmlFor="description">Description:</label>
                        <input type="textarea" name="description" onChange={this.onChangeHandler} value={this.state.description} />
                        {this.state.errors.description &&
                            <div className='input-validation'>{this.state.errors.description}</div>
                        }
                        <label htmlFor="imgUrl">Image URL:</label>
                        <input type="text" name="imgUrl" onChange={this.onChangeHandler} value={this.state.imgUrl} />
                        {this.state.errors.imgUrl &&
                            <div className='input-validation'>{this.state.errors.imgUrl}</div>
                        }
                        <input type="submit" value="Add" onClick={this.onSubmitHandler.bind(this)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddGame;