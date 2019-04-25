import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class DonateSuggestion extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-donation-suggestion">       
            <h1 className=" donation-suggestion-text">Be volunteer to improve your community </h1>
            <img className="donation-suggestion-img" src="https://www.franchise.be/media/1012/koekjes.png" />
            <h1 className=" donation-suggestion-text">Your change can make a change</h1>
            <Link to="/Donate" className="btn-donate-now">Start Now ! </Link>
            </section >
        );
    }
}
export default DonateSuggestion;