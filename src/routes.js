import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PlanetsScreen from './screens/planets';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PlanetsScreen} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
