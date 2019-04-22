import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import ChuDaiko from './ChuDaiko';
import sketch from './sketch';

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000",
            weight: 3
        }
    }

    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }
    
    handleWeight = (e) => {
        this.setState({
            weight: e.target.value
        })
    }

    render() {
        return (
            <div className="side-bar">
                <ul>
                    <li>
                        <label htmlFor="color">Color:</label>
                        <input type="color" id="color" onChange={this.handleColor} />
                    </li>
                    <li>
                        <label htmlFor="weight">Stroke</label>
                        <input type="number" id="weight" min="2" max="200" value={this.state.weight} onChange={this.handleWeight} />
                    </li>
                    <li>
                        <button id="clear">Clear</button>
                    </li>
                </ul>

                <P5Wrapper sketch={sketch} color={this.state.color} weight={this.state.weight}></P5Wrapper>

                <div>
                    <ChuDaiko />
                </div>
            </div>
        )
    }
}

export default SideBar;