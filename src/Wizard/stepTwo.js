import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { propLocation } from '../redux/reducer';
import stepActive from '../assets/step_active.png';
import stepInactive from '../assets/step_inactive.png';
import stepCompleted from '../assets/step_completed.png';
import './steptwo.css';

class stepTwo extends Component {
    constructor() {
        super();

        this.state = {
            address_input: '',
            city_input: '',
            state_input: '',
            zip_input: 0
        }

        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleStateInput = this.handleStateInput.bind(this);
        this.handleZipInput = this.handleZipInput.bind(this);
    }

    handleAddressInput(e) {
        e.preventDefault();
        this.setState({ address_input: e.target.value })
    }

    handleCityInput(e) {
        e.preventDefault();
        this.setState({ city_input: e.target.value })
    }

    handleStateInput(e) {
        e.preventDefault();
        this.setState({ state_input: e.target.value })
    }

    handleZipInput(e) {
        e.preventDefault();
        this.setState({ zip_input: e.target.value })
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
                    <p>Step 2</p>
                    <div className="step-buttons">
                        <img className="buttons" src={stepCompleted} alt="step-active.png" />
                        <img className="buttons" src={stepActive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                    </div>
                </div>
                <div>
                    <h2 className="address-title">Address</h2>
                    <input className="address-input" value={this.state.address_input} onChange={(e) => this.handleAddressInput(e)} />
                </div>
                <div className="div-around-city-state">
                    <div className="city-div">
                        <h2 className="city-title">City</h2>
                        <input value={this.state.city_input} onChange={(e) => this.handleCityInput(e)} />
                    </div>
                    <div>
                        <h2 className="state-title">State</h2>
                        <input value={this.state.state_input} onChange={(e) => this.handleStateInput(e)} />
                    </div>
                </div>
                <div className="zip-div">
                    <h2 className="zip-title">Zip</h2>
                    <input value={this.state.zip_input} onChange={(e) => this.handleZipInput(e)} />
                </div>
                <div className="prev-next-div">
                    <div className="previous-button-div">
                        <Link to='/Wizard/1'><button className="previous-button">Previous Step</button></Link>
                    </div>
                    <div>
                        <Link to='/Wizard/3'><button className="nextstep-button" onClick={() => this.props.propLocation(
                            this.state.address_input
                            , this.state.city_input
                            , this.state.state_input
                            , this.state.zip_input
                        )}>Next Step</button></Link>

                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { prop_address, prop_city, prop_state, prop_zip } = state;
    return {
        prop_address
        , prop_city
        , prop_state
        , prop_zip
    }
}

export default connect(mapStateToProps, { propLocation })(stepTwo);