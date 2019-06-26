import React from 'react';
export default class Welcome extends React.Component {
    render() {
        console.log(this.props);
        return <h1>Hello, {this.props.name}</h1>;
    }
}