import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 700,
            width: 400
        }
    }

    handleHeight = (e) => {
        let height = e.target.value * 30;
        this.setState({
            height
        })
    };

    handleWidth = (e) => {
        let width = e.target.value * 30;
        this.setState({
            width
        })
    };

    handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.selectHeight(this.state.height); 
        this.props.selectWidth(this.state.width);
    }

    render() {
        return (
            <div className="size-input">
                <form>
                    <label> Stage Size:
                        <input className="text-field" type="text" onChange={this.handleWidth} placeholder="width in feet"></input>
                        <input className="text-field" type="text" onChange={this.handleHeight} placeholder="height in feet"></input>
                    </label>
                    <button className="size-btn" onClick={e => this.handleChange(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Settings;

