import React, { Component } from 'react';
import gameService from '../../services/GameServices';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
        }
        gameService.getOne(props.match.params.id).then((res) => {
            this.setState({ title: res.title, description: res.description, imgUrl: res.imgUrl })
        })
    }

    render() {
        return (
            <div className="center">
                <div className="divEx">

                    <div className="images">
                        <img className="images" src={this.state.imgUrl} alt="" />
                    </div>

                    <div className="details-text">
                        <h3>{this.state.title}</h3>
                        <p className="text-description">{this.state.description}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Details;
