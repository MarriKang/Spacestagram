import React, { Component } from 'react';


export default class App extends Component {
    constructor() {
        super();

        this.state = {
            apiData: {}
        }
    }

    async componentDidMount() {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=yCCnB4GtOJf4czYyEE5uVPoHpQYhpIzdSYhrjcDq');
        const data = await res.json();
        this.setState({ apiData: data });
    }

    render() {
        return (
            <div>
                <h1>Starstagram</h1>
                <h2>Brought to you by NASA's image API</h2>
            </div>
        )
    }
}