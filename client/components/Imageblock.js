import React, { Component } from 'react';

export default class Imageblock extends Component {
    constructor() {
        super();

        this.state = {
            apiData: {},
            liked: false
        }
    }

    toggleLike = (state) => {
        this.setState({
            liked: !this.state.liked
        })
    }

    //makes a call to the NASA api and gets the picture of the day object
    async componentDidMount() {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=yCCnB4GtOJf4czYyEE5uVPoHpQYhpIzdSYhrjcDq');
        const data = await res.json();
        this.setState({ apiData: data });
    }


    render() {
        const likedStatus = this.state.liked ? "LIKED" : "LIKE";
        const likeButtonClass = this.state.liked ? "liked" : "unliked";
        return (
            <div className = "image-block">
                    <img src={this.state.apiData.url} className="image"/>
                <div className="block-text">
                    <h3 className="title">{this.state.apiData.title}</h3>
                    <h4 className="subtitle">{this.state.apiData.date}</h4>
                </div>
                <button className={likeButtonClass} onClick={this.toggleLike}>{likedStatus}</button>
            </div>
        )
    }
}