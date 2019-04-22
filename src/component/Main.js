import React, { Component } from 'react';
import Settings from './Settings';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 700,
            height: 400,
            color: '#000',
            weight: 3
        }
    }

    handleHeight = (height) => {
        this.setState({
            height
        })
    }

    handleWidth = (width) => {
        this.setState({
            width
        })
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
        console.log(this.state.width); 

        return (
            <div>
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
                            {/* <P5Wrapper sketch={sketch} color={this.state.color} weight={this.state.weight}></P5Wrapper> */}
                        </li>
                    </ul>

                    {/* <div>
                        <ChuDaiko />
                    </div> */}
                </div>
                <Settings selectHeight={this.handleHeight} selectWidth={this.handleWidth} />

                {/* <div id="stage"> */}
                <P5Wrapper sketch={sketch} height={this.state.height} width={this.state.width} color={this.state.color} weight={this.state.weight}></P5Wrapper>
                {/* </div> */}
                {/* <div id="stage" style={{ height: this.state.height, width: this.state.width }}></div> */}
            </div>
        );
    }
}

export default Main; 