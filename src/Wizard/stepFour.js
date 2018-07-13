import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loanMortgage from '../redux/reducer';


class stepThree extends Component {
    constructor() {
        super();

        this.state = {
            loan_input: 0,
            mortgage_input: 0
        }

        this.handleLoanInput = this.handleLoanInput.bind(this);
        this.handleMortgageInput = this.handleMortgageInput.bind(this);

    }

    handleLoanInput(e) {
        e.preventDefault();
        this.setState({ loan_input: e.target.value})
    }

    handleMortgageInput(e) {
        e.preventDefault();
        this.setState({ mortgage_input: e.target.value})
    }


    render() {
        return (
            <div>
                <div>
                    <h2>Loan Amount</h2>
                    <input value={this.state.loan_input} onChange={(e) => this.handleLoanInput(e)}/>
                </div>
                <div>
                    <h2>Monthly Mortgage</h2>
                    <input value={this.state.mortgage_input} onChange={(e) => this.handleMortgageInput(e)}/>
                </div>
                <div>
                <Link to='/Wizard/3'><button>Previous Step</button></Link>
                    <button onClick={() => this.props.loanMortgage()}>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        prop_loan: state.prop_loan
        ,   prop_mortgage: state.prop_mortgage
    }
}


export default connect(mapStateToProps(stepThree));