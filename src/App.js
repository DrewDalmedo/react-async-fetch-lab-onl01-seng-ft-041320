// create your App component here
import React, { Component, PureComponent } from 'react';

export default class App extends Component {
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
    }

    render() {
        return (
            <div>
                Mounted!
            </div>
        )
    }
}