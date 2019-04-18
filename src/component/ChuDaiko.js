import React, { Component } from 'react';

class ChuDaiko extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        const container = document.querySelector('.chu-ctn');
        const chu = document.querySelector('#chu-daiko');

        // container.addEventListener("touchstart", dragStart, false);
        // container.addEventListener("touchend", dragEnd, false); 
        // container.addEventListener("touchmove", drag, false); 

        // container.addEventListener("mousedown", dragStart, false); 
        // container.addEventListener("mouseup", dragEnd, false); 
        // container.addEventListener("mousemove", drag, false); 
    }

    handleClick = () => {
        document.getElementById('chu-daiko')
    }

    // dragStart(e) {
    //     if (e.type === "touchstart") {
    //         initialX = e.touches[0].clientX - xOffset; 
    //         initialY = e.touches[0].clientY - yOffset;
    //     } else {
    //         initial = e.clientX - xOffset; 
    //         initialY = e.clientY - yOffset;
    //     }
    // }

    render() {
        return (
            <div className="chu-ctn">
                <div><span className="add-chu">+</span></div>
                <img id="chu-daiko" onClick={this.handleClick} src="https://upload.wikimedia.org/wikipedia/commons/1/16/Miya_Daiko_drum_-_Taiko_drums.jpg" alt="chu-daiko"></img>
            </div>
        )
    }
}

export default ChuDaiko; 