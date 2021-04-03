import { auth } from '../../utils/firebase';
import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount() {
        auth.signOut().then((res) => {
            this.props.history.push('/home');
        });
    }

    render () {
        return  (<></>);
    }

}



export default Logout;