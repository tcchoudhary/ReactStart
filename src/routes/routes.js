import React from 'react';
import { Router, Link } from "@reach/router"
import Welcome from '../form1/welcome';
import SignInPage from '../signin/signin';
import DashboardPage from '../dashboard/dashboard';

let Home = () => (
    <div>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="login">Login</Link>
        </nav>
        <Welcome name="World" />
    </div>
);
let Login = () => (
    <div>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/login">Login</Link>
        </nav>
        <SignInPage/>
    </div>
);
let Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <DashboardPage/>
    </div>
);
export default {
    Home,Login,Dashboard
}
