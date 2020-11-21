import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { Home } from '../components/Home';
import { About } from '../components/About';
import { NavMenu } from '../ui/NavMenu';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <NavMenu />
                <Switch>
                    <Route path="/name/:nameCountry" component={About} />
                    <Route exact path="/" component={Home} />
                    <Redirect path="/" />
                </Switch>
            </Router>
        </>
    )
}
