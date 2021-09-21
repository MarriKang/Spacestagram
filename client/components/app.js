import React, { Component } from 'react';
import Imageblock from './Imageblock';

//arbitrary array to display 6 images
const arrayForImages = [1,2,3,4,5,6];

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Starstagram</h1>
                    <h2>Brought to you by NASA's image API</h2>
                </header>
                {arrayForImages.map((x, index) => {
                    return <Imageblock key={index}/>
                })}
            </div>
        )
    }
}