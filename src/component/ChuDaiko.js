import React, { Component } from 'react';

class ChuDaiko extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pos1: 0,
            pos2: 0,
            pos3: 0,
            pos4: 0
        }
    }

    // handleClick = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         pos3: e.clientX,
    //         pos4: e.clienY
    //     })

    //     let chu = document.getElementById('chu-ctn');

    //     chu.onmousemove = this.elementDrag(e);
    //     chu.onmouseup = this.closeDragElement();
    // }

    // elementDrag = (e) => {
    //     e.preventDefault();
    //     let pos1 = this.state.pos3 - e.clientX;
    //     let pos2 = this.state.pos4 - e.clientY;
    //     let pos3 = e.clientX;
    //     let pos4 = e.clientY;

    //     this.setState({
    //         pos1,
    //         pos2, 
    //         pos3,
    //         pos4
    //     })

    //     let chu = document.getElementById('chu-ctn'); 
        
    //     chu.style.top = (e.offsetTop - pos2) + "px";
    //     chu.left = (e.offsetLeft - pos1) + "px";
    // }

    // closeDragElement = () => {
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    // }

    render() {
        return (
            <div className="chu-test">
                <img id="chu-daiko" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Miya_Daiko_drum_-_Taiko_drums.jpg" alt="chu-daiko"></img>
            </div>
        )
    }
}

export default ChuDaiko; 