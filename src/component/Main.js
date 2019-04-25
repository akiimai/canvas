import React, { Component } from 'react';
import Settings from './Settings';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import ChuDaiko from './ChuDaiko';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sidebar: true,
            width: 700,
            height: 400,
            color: '#000',
            weight: 3,
            chu: [],
            selectedChu: "",
            chuMove: false,
            pos1: 0,
            pos2: 0,
            pos3: 0,
            pos4: 0
        }
    }

    sideBar = () => {
        this.setState({
            sidebar: false
        })

        let sideBar = document.getElementById('side-bar'); 

        if (!this.state.sidebar) {
            sideBar.classList.add("open")
        } else {
            sideBar.classList.remove("open")
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

    moveChu = (e, index) => {
        e.preventDefault();
        let chuItem = "chu-" + index;
        let selectedChu = document.getElementById(chuItem);
        this.setState({
            selectedChu,
            pos3: e.clientX,
            pos4: e.clientY
        })

        selectedChu.onmousemove = this.elementDrag;
    }

    elementDrag = (e) => {
        e.preventDefault();
        let pos1 = this.state.pos3 - e.clientX;
        let pos2 = this.state.pos4 - e.clientY;
        let pos3 = e.clientX;
        let pos4 = e.clientY;
        let selectedChu = this.state.selectedChu;

        this.setState({
            pos1,
            pos2,
            pos3,
            pos4,
            chuMove: true
        })

        selectedChu.style.top = (selectedChu.offsetTop - pos2) + "px";
        selectedChu.style.left = (selectedChu.offsetLeft - pos1) + "px";
    }

    stopDrag = (e) => {
        let selectedChu = this.state.selectedChu;
        selectedChu.onmouseup = null;
        selectedChu.onmousemove = null;

        this.setState({
            chuMove: false
        })
    }

    deleteChu = (e, index) => {
        let chuItem = "chu-" + index;
        let selectedChu = document.getElementById(chuItem);

        selectedChu.innerHTML = "<div></div>";
    }

    render() {
        let chu = this.state.chu.map((item, index) => {
            let chuItem = "chu-" + index;
            return <div id={chuItem} className="chu-item" key={index} onMouseUp={this.stopDrag} onMouseDown={(e) => this.moveChu(e, index)}>
                <span className="delete-chu" onClick={(e) => this.deleteChu(e, index)}><i className="fas fa-times"></i></span>
                {item}
            </div>
        });

        let sidebar = this.state.sidebar ? <span onClick={this.sideBar}><i className='fas fa-times'></i></span>
        : <span onClick={this.sideBar}><i className='fas fa-arrow-right'></i></span>

        return (
            <div>
                <div id="side-bar">
                    <div>
                        {sidebar}
                    </div>
                    <ul>
                        <li>
                            <label htmlFor="color">Color:</label>
                            <input className="stroke-type" type="color" id="color" onChange={this.handleColor} />
                        </li>
                        <li>
                            <label htmlFor="weight">Stroke:</label>
                            <input className="stroke-type" type="number" id="weight" min="2" max="200" value={this.state.weight} onChange={this.handleWeight} />
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

                <P5Wrapper sketch={sketch} height={this.state.height} width={this.state.width} color={this.state.color} weight={this.state.weight} chuMove={this.state.chuMove}></P5Wrapper>
            </div>
        );
    }
}

export default Main; 