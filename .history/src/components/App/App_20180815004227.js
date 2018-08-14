import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import routes from '../../routes';
import './App.css';
import Menus from '../Menus/Menus'

class App extends Component {

    showContentMenus = routes => {
        let result = []
        if (routes.length) {
            result = routes.map((route, index) => {
                return (
                    <Route
                    key={ index }
                    path={ route.path }
                    exact={ route.exact }
                    component={ route.main }
                    />
                );
            })
        }
        return <Switch>{ result }</Switch>
    }

    render () {
        return (
        <Router>
            <Fragment>
                { /* MENU */ }
                <Menus/>
                <div className="container">
                    <div className="row">
                        { this.showContentMenus(routes) }
                    </div>
                </div>
            </Fragment>
        </Router>
        )
    }
}

export default App
