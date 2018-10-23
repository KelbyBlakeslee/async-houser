import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nameDesc } from '../redux/reducer';
import stepActive from '../assets/step_active.png';
import stepInactive from '../assets/step_inactive.png';
import './stepone.css';


class stepOne extends Component {
    constructor() {
        super();

        this.state = {
            name_input: '',
            desc_input: ''

        }

        this.handleDescInput = this.handleDescInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }


    handleNameInput(e) {
        e.preventDefault();
        this.setState({ name_input: e.target.value })
    }

    handleDescInput(e) {
        e.preventDefault();
        this.setState({ desc_input: e.target.value })
    }




    render() {
        return (
            <div className="whole-div">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div className="div-around-h2-button">
                    <h2 className="h2">Add new listing</h2>
                    <button className="cancel-button">Cancel</button>
                </div>
                <div>
                    <p>Step 1</p>
                    <div className="step-buttons">
                        <img className="buttons" src={stepActive} alt="step-active.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                    </div>
                </div>
                <div>
                    <h3 className="name-tag">Property Name</h3>
                    <input className="name-input" value={this.state.name_input} onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div>
                    <h3 className="desc-tag">Property Description</h3>
                    <input className="desc-input" value={this.state.desc_input} onChange={(e) => this.handleDescInput(e)} />
                </div>
                <div className="next-step-div">
                    <Link to='/Wizard/2'><button className="next-step" onClick={() => this.props.nameDesc(this.state.name_input, this.state.desc_input)}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { prop_name, prop_desc } = state;
    return {
        prop_name,
        prop_desc
    }
}



export default connect(mapStateToProps, { nameDesc })(stepOne);