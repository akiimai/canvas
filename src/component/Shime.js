import React, { Component } from 'react';
import image1 from '../images/cat.png'

class Shime extends Component {
    render() {
        return (
            <div className="chu-test">
                <img id="chu-daiko" src={image1} alt="chu-daiko"></img>
            </div>
        )
    }
}

export default Shime; 