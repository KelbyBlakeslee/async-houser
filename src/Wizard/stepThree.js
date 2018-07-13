import React, { Component } from 'react';
import { connect } from 'react-redux';
import propImage from '../redux/reducer';
import { Link } from 'react-router-dom';


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
                <div>
                    <h2>Image URL</h2>
                    <input value={this.state.image_input} onChange={(e) => this.handleImageInput(e)} />
                </div>
                <div>
                <Link to='/Wizard/2'><button>Previous Step</button></Link>
                    <button onClick={() => this.props.propImage()}>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        prop_image: state.prop_image
    }
}



export default connect(mapStateToProps (stepThree));