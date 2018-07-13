import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propLocation from '../redux/reducer';

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
        e.preventDefualt();
        this.setState({ address_input: e.target.value })
    }

    handleCityInput(e) {
        e.preventDefualt();
        this.setState({ city_input: e.target.value })
    }

    handleStateInput(e) {
        e.preventDefualt();
        this.setState({ state_input: e.target.value })
    }

    handleZipInput(e) {
        e.preventDefualt();
        this.setState({ zip_input: e.target.value })
    }



    render() {
        return (
            <div>
                <div>
                    <h2>Address</h2>
                    <input value={this.state.address_input} onChange={(e) => this.handleAddressInput(e)} />
                </div>
                <div>
                    <h2>City</h2>
                    <input value={this.state.city_input} onChange={(e) => this.handleCityInput(e)} />
                </div>
                <div>
                    <h2>State</h2>
                    <input value={this.state.state_input} onChange={(e) => this.handleStateInput(e)} />
                </div>
                <div>
                    <h2>Zip</h2>
                    <input value={this.state.zip_input} onChange={(e) => this.handleZipInput(e)} />
                </div>
                <div>
                    <Link to='/Wizard/1'><button>Previous Step</button></Link>
                    <button onClick={() => this.props.propLocation()}>Next Step</button>

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        prop_address: state.prop_address
        , prop_city: state.prop_city
        , prop_state: state.prop_state
        , prop_zip: state.prop_zip
    }
}

export default connect(mapStateToProps(stepTwo));