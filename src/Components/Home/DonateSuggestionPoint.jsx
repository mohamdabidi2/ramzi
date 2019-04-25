import React, { Component } from 'react';
class DonateSuggestionPoint extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-donation-suggestion-gift"> 
            <div className="donation-suggestion-gift">
            <p className="donation-suggestion-gift-question">have you ever participated before in volunteering action?</p>    
            <p className="donation-suggestion-gift-advice">If yes our website Will provide you the opportunity to participate as well. If not, here is a chance to start either individually, or with an organisation. as Volunteer!</p>  
            </div>
            </section >
        );
    }
}
export default DonateSuggestionPoint;