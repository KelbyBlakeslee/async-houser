import React, { Component } from 'react';
import { connect } from 'react-redux';
import { propImage } from '../redux/reducer';
import { Link } from 'react-router-dom';
import stepActive from '../assets/step_active.png';
import stepInactive from '../assets/step_inactive.png';
import stepCompleted from '../assets/step_completed.png';
import './stepthree.css';


class stepThree extends Component {
    constructor() {
        super();

        this.state = {
            image_input: ''
        }

        this.handleImageInput = this.handleImageInput.bind(this);
    }

    handleImageInput(e) {
        e.preventDefault();
        this.setState({ image_input: e.target.value })
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
                    <p>Step 3</p>
                    <div className="step-buttons">
                        <img className="buttons" src={stepCompleted} alt="step-active.png" />
                        <img className="buttons" src={stepCompleted} alt="step-inactive.png" />
                        <img className="buttons" src={stepActive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                        <img className="buttons" src={stepInactive} alt="step-inactive.png" />
                    </div>
                </div>
                <div>
                    <h2 className="image-title">Image URL</h2>
                    <input className="image-input" value={this.state.image_input} onChange={(e) => this.handleImageInput(e)} />
                </div>
                <div className="prev-next-div">
                    <div className="previous-button-div">
                        <Link to='/Wizard/2'><button className="previous-button">Previous Step</button></Link>
                    </div>
                    <div>
                        <Link to='/Wizard/4'><button className="nextstep-button" onClick={() => this.props.propImage(this.state.image_input)}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { prop_image } = state;
    return {
        prop_image
    }
}



export default connect(mapStateToProps, { propImage })(stepThree);