import '../Forms.css'
import React, { Component } from 'react';
import gameService from '../../services/GameServices';
import { auth } from '../../utils/firebase';


class Edit extends Component {
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
        gameService.getOne(props.match.params.id).then((res) => {
            this.setState({ title: res.title, description: res.description, imgUrl: res.imgUrl })
        })

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onDeleteHandler(e) {

        e.preventDefault();


        auth.currentUser.getIdTokenResult()
                .then((id) => {
                    gameService.deleteOne(this.props.match.params.id, id.token).then((res) => {
                        this.props.history.push('/my-games');
                    })
                }).catch((err) => console.log(err));
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
            auth.currentUser.getIdTokenResult()
                .then((id) => {
                    gameService.editOne(this.props.match.params.id, id.token, {
                        title: this.state.title,
                        description: this.state.description,
                        imgUrl: this.state.imgUrl,
                    }).then((res) => {
                        this.props.history.push('/my-games');
                    })
                }).catch((err) => console.log(err));
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
                        <input type="submit" value="Edit" onClick={this.onSubmitHandler.bind(this)} />
                        <input type="submit" value="Delete" onClick={this.onDeleteHandler.bind(this)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;
