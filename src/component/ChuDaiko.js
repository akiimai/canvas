import React, { Component } from 'react';

class ChuDaiko extends Component {

    handleClick = () => {
        document.getElementById('chu-daiko')

    }

    render() {
        return (
            <div className="chu-ctn">
                {/* <div><span className="add-chu">+</span></div> */}
                {/* <img id="chu-daiko" onClick={this.handleClick} src="https://upload.wikimedia.org/wikipedia/commons/1/16/Miya_Daiko_drum_-_Taiko_drums.jpg" alt="chu-daiko"></img> */}
            </div>
        )
    }
}

export default ChuDaiko; 