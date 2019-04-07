import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppNav from "./AppNav"
import Home from "./Home"
import SignupForm from "./Form"
import * as serviceWorker from './serviceWorker';
import {Router, Route} from "react-router-dom"
import history from "./history"

const AppRouter = () => (
    <Router history={history}>
    <div>
        <AppNav/>
        <Route path ="/" component={Home}></Route>
        <Route path ="/signup" component={SignupForm}></Route>
    </div>
    </Router>
)

export default AppRouter
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
