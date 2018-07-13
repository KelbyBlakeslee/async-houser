import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rent from '../redux/reducer';


class stepFive extends Component {
    constructor() {
        super();

        this.state = {
            rent_input: 0
        }

        this.handleRentInput = this.handleRentInput.bind(this);
    }

    handleRentInput(e) {
        e.preventDefault();
        this.setState({ rent_input: e.target.value })
    }


    render() {
        return (
            <div>
                <div>
                    <h2>Desired Rent</h2>
                    <input value={this.state.rent_input} onChange={(e) => this.handleRentInput(e)} />
                </div>
                <div>
                <Link to='/Wizard/4'><button>Previous Step</button></Link>
                    <button onClick={() => this.props.Rent()}>Complete</button>
                </div>
            </div>
        )
    }
}

function mapStateToprops(state) {
    return {
        prop_rent: state.prop_rent
    }
}



export default connect(mapStateToprops(stepFive));