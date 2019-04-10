import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNav from "./AppNav"
import Home from "./Home"
import MembershipRequest from "./MembershipRequest"
import About from "./About"
import * as serviceWorker from './serviceWorker';
import {Router, Route} from "react-router-dom"
import history from "./history"
import GigRequest from './GigRequest';


const AppRouter = () => (

    <Router history={history}>
    <div>
        <AppNav/>
        <Route path ="//" component={Home}></Route>
        <Route path ="/signup" component={MembershipRequest}></Route>
        <Route path ="/about" component={About}></Route>
        <Route path ="/gig-request" component={GigRequest}></Route>
    </div>
    </Router>
)

export default AppRouter
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
