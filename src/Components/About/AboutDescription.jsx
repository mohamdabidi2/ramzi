import React, { Component } from 'react';
class AboutDescription extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-about-description">
                <div className="about-description">
                    <h1 className="about-description-title">About Us</h1>
                    <h2 className="about-description-subtitle">What's VOLUNTEERING.TN ?</h2>
                    <p className="about-description-text">VOLUNTEERING.TN is a website where the volunteer needs of organizations may be posted and volunteers may search for places to serve in the community, providing opportunities to help those in need and enhance the quality of life in the community.

VOLUNTEERING.TN is a service to help link community volunteer needs with volunteers and does not discriminate based on race, religion, gender, ethnicity, or sexual orientation in posting projects or in encouraging volunteers to serve according to our guidelines.</p>
                    <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS84MTkvb3JpZ2luYWwvdm9sdW50ZWVyLmpwZw==" alt="Donate" />
                </div>
                <div className="about-founder">
                    <h1 className="about-founder-title"> VOLUNTEERING.TN Community Service Guidelines:</h1>
                    <p className="about-founder-text">The best service opportunities are collaborative—working side by side with others in faith-based, nonprofit, community, and government organizations.

Community service opportunities should enhance the quality of life in the community and assist the poor and needy.

JustServe projects should not have a political or advocacy focus, be for-profit oriented, or directly involve volunteers in fund-raising or other prohibited activities.</p>
                </div>
                <div className="vid" >
                <iframe width="853" height="480" src="https://www.youtube.com/embed/orMmIhQn3q4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </section >
        );
    }
}
export default AboutDescription;