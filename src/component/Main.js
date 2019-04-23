import React, { Component } from 'react';
import Settings from './Settings';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import ChuDaiko from './ChuDaiko';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 700,
            height: 400,
            color: '#000',
            weight: 3,
            chu: []
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

    addChu = () => {
        let chu = [...this.state.chu]
        chu.push(<ChuDaiko />)
        this.setState({
            chu
        })
    }

    render() {
        let chu = this.state.chu.map((item, index) => {
            return <div className="chu-item" key={index}>{item}</div>
        });

        return (
            <div>
                <div className="side-bar">
                    <div>
                        <span><i className='fas fa-times'></i></span>
                    </div>
                    <ul>
                        <li>
                            <label htmlFor="color">Color:</label>
                            <input type="color" id="color" onChange={this.handleColor} />
                        </li>
                        <li>
                            <label htmlFor="weight">Stroke:</label>
                            <input type="number" id="weight" min="2" max="200" value={this.state.weight} onChange={this.handleWeight} />
                        </li>
                        <li>
                            <button id="clear"><i className='fas fa-trash-alt'></i></button>
                        </li>
                    </ul>

                    <button onClick={this.addChu}>Chu Add</button>
                </div>
                
                <Settings selectHeight={this.handleHeight} selectWidth={this.handleWidth} />

                <div id="chu-ctn">
                    {chu}
                </div>

                <P5Wrapper sketch={sketch} height={this.state.height} width={this.state.width} color={this.state.color} weight={this.state.weight}></P5Wrapper>

            </div>
        );
    }
}

export default Main; 