import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nameDesc } from '../redux/reducer';


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
            <div>
                <div>
                    <h2>Property Name</h2>
                    <input value={this.state.name_input} onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div>
                    <h2>Property Description</h2>
                    <input value={this.state.desc_input} onChange={(e) => this.handleDescInput(e)} />
                </div>
                <div>
                    <Link to='/Wizard/2'><button onClick={() => this.props.nameDesc()}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { prop_name: state.prop_name, prop_desc: state.prop_desc }
}



export default connect(mapStateToProps(stepOne));