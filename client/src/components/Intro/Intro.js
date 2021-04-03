import './Intro.css'
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Intro extends Component {


    render() {

        return (
            <div>
                <div className="container">
                    <h2 className="homePageTitle">The Game Library</h2>
                </div>
                <div>
                <NavLink className="enter-button" exact={true} to="/home">Enter</NavLink>
                </div>
            </div>

        )
    }
}

export default Intro;