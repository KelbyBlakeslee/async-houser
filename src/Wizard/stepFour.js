import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loanMortgage } from '../redux/reducer';
import stepActive from '../assets/step_active.png';
import stepInactive from '../assets/step_inactive.png';
import stepCompleted from '../assets/step_completed.png';
import './stepfour.css';


class stepFour extends Component {
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
        this.setState({ loan_input: e.target.value })
    }

    handleMortgageInput(e) {
        e.preventDefault();
        this.setState({ mortgage_input: e.target.value })
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
                        <img className="buttons" src={stepActive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                    </div>
                </div>
                <div>
                    <h2 className="loan-title">Loan Amount</h2>
                    <input className="loan-input" value={this.state.loan_input} onChange={(e) => this.handleLoanInput(e)} />
                </div>
                <div>
                    <h2 className="mortgage-title">Monthly Mortgage</h2>
                    <input className="mortgage-input" value={this.state.mortgage_input} onChange={(e) => this.handleMortgageInput(e)} />
                </div>
                <div className="prev-next-div">
                    <div className="previous-button-div">
                        <Link to='/Wizard/3'><button className="previous-button">Previous Step</button></Link>
                    </div>
                    <div>
                        <Link to='/Wizard/5'><button className="nextstep-button" onClick={() => this.props.loanMortgage(this.state.loan_input, this.state.mortgage_input)}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { prop_loan, prop_mortgage } = state;
    return {
        prop_loan
        , prop_mortgage
    }
}


export default connect(mapStateToProps, { loanMortgage })(stepFour);