import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Rent } from '../redux/reducer';
import axios from 'axios';
import stepActive from '../assets/step_active.png';
import stepCompleted from '../assets/step_completed.png';
import './stepfive.css';



class stepFive extends Component {
    constructor() {
        super();

        this.state = {
            rent_input: 0
        }

        this.handleRentInput = this.handleRentInput.bind(this);
        this.completeProperty = this.completeProperty.bind(this);
    }

    handleRentInput(e) {
        e.preventDefault();
        this.setState({ rent_input: e.target.value })
    }

    completeProperty() {
        let { property } = this.props
        property.prop_rent = this.state.rent_input
        this.props.Rent(this.state.rent_input)
        console.log(property.prop_rent)
        axios.post('/api/addProperty', { property })
    }


    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div className="div-around-h2-button">
                    <h2 className="h2">Add new listing</h2>
                    <button className="cancel-button">Cancel</button>
                </div>
                <div>
                    <p>Step 4</p>
                    <div className="step-buttons">
                        <img className="buttons" src={stepCompleted} alt="step-active.png" />
                        <img className="buttons" src={stepCompleted} alt="step-inactive.png" />
                        <img className="buttons" src={stepCompleted} alt="step-inactive.png" />
                        <img className="buttons" src={stepCompleted} alt="step-inactive.png" />
                        <img className="buttons" src={stepActive} alt="step-inactive.png" />
                    </div>
                    <h5>Recommended Rent $625</h5>
                </div>
                <div>
                    <h2 className="rent-title">Desired Rent</h2>
                    <input className="rent-input" value={this.state.rent_input} onChange={(e) => this.handleRentInput(e)} />
                </div>
                <div className="prev-next-div">
                    <div className="previous-button-div">
                        <Link to='/Wizard/4'><button className="previous-button">Previous Step</button></Link>
                    </div>
                    <div>
                        <Link to="/Dashboard"><button className="complete-button" onClick={() => this.completeProperty()}>Complete</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        property: state
    }
}



export default connect(mapStateToProps, { Rent })(stepFive);