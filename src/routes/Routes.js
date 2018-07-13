import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import stepOne from '../Wizard/stepOne';


export default (
    <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        
    </Switch>
)