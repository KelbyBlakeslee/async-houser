import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            desired_rent: 0,
            property: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({ desired_rent: e.target.value })
    }

    componentDidMount() {
        axios.get('/api/getPropertyId')
            .then(response => {
                console.log(response)
                this.setState({ property: response.data })
            })
    }

    deleteProperty(id) {
        axios.delete(`/api/deleteProperty/${id}`)
            .then(response => {
                console.log(response)
                console.log('successfully deleted property')
            })
    }






    render() {
        let properties = this.state.property.map((e, i) => {
            console.log(e)
            return (
                <div key={e.id}>
                <button className="close-button" onClick={() => this.deleteProperty(e.id)}>X</button>
                    <div className="property-whole-div">
                        <div className="name-div">
                            <h3 className="name-title">Name</h3>
                            {e.prop_name}
                        </div>
                        <div className="name-desc">
                            {e.prop_desc}
                        </div>
                        <div className="div-around-property">
                            <div className="loan--prop-div">
                                <p className="p-tags">Loan:</p>
                                {e.loan_amt}
                            </div >
                            <div className="rent-prop-div">
                                <p className="p-tags">Rent:</p>
                                {e.desired_rent}
                            </div>
                            <div className="address-prop-div">
                                <p className="p-tags">Address:</p>
                                {e.address}
                            </div>
                            <div className="city-prop-div">
                                <p className="p-tags">City:</p>
                                {e.city}
                            </div>
                            <div className="state-prop-div">
                                <p className="p-tags">State:</p>
                                {e.state}
                            </div>
                            <div className="zip-prop-div">
                                <p className="p-tags">Zip:</p>
                                {e.zip}
                            </div>
                        </div>
                    </div>
                    <hr className="horizontal-rule" />
                </div>
            )
        })
        return (
            <div className="whole-div">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div className="div-around-add">
                    <Link to='/Wizard/1'><button className="add-button">Add New Property</button></Link>
                </div>
                <div className="main-div">
                    <h2 className="h2">List properties with "desired rent" greater than: $</h2>
                    <input className="rent-input" value={this.desired_rent} onChange={(e) => this.handleInput(e)} />
                    <div className="button-div">
                        <button className="filter-button">Filter</button>
                        <button className="reset-button">Reset</button>
                    </div>
                </div>
                <hr className="horizontal-rule" />
                <h2>Home Listings</h2>
                <div>
                    {properties}
                </div>
            </div>
        )
    }
}


export default Dashboard;