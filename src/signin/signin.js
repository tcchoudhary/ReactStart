import React, { Component } from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import Button from 'react-bootstrap-button-loader';
import { navigate, redirectTo } from "@reach/router";

export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            password: ""
        };
    }

    validateForm() {
        return (
            this.state.username.length > 0 &&
            this.state.password.length > 0
        );
    }

    handleChange = event => {
        console.log('in handle change fn')
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.setState({ isLoading: false });
            localStorage.setItem('loggedIn', true);
            navigate('/dashboard');
        }
    };

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username">
                    {/*<ControlLabel>username</ControlLabel>*/}
                    <FormControl
                        autoFocus
                        type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    {/*<ControlLabel>Password</ControlLabel>*/}
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button disabled={!this.validateForm()} type="submit" loading={this.state.isLoading} spinColor="Green" bsStyle="primary">Login</Button>
            </form>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.renderForm()}
            </div>
        );
    }
}