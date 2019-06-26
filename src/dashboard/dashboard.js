import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import { navigate } from "@reach/router";

export default class DashboardPage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    logout = () => {
        localStorage.setItem('loggedIn', false);
        navigate('/login');
    };

    render = () => {
        if(localStorage.getItem('loggedIn') === 'false') {
            navigate('/login');
        }
        return (
            <button onClick={this.logout}>Logout</button>
        );
    }
}
