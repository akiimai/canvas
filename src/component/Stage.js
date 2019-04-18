import React, { Component } from 'react';
import Settings from './Settings';
import ChuDaiko from './ChuDaiko';

class Stage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 700, 
            height: 400 
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

    render() {
        return (
            <div>
                <Settings selectHeight={this.handleHeight} selectWidth={this.handleWidth} />
                <ChuDaiko />
                <div id="stage" style={{height: this.state.height, width: this.state.width}}></div>
            </div>
        );
    }
}

export default Stage; 