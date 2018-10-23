import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import stepOne from '../Wizard/stepOne';
import stepTwo from '../Wizard/stepTwo';
import stepThree from '../Wizard/stepThree';
import stepFour from '../Wizard/stepFour';
import stepFive from '../Wizard/stepFive';
import Login from '../Login/Login';





export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route path='/Wizard/1' component={stepOne} />
        <Route path='/Wizard/2' component={stepTwo} />
        <Route path='/Wizard/3' component={stepThree} />
        <Route path='/Wizard/4' component={stepFour} />
        <Route path='/Wizard/5' component={stepFive} />
    </Switch>
)