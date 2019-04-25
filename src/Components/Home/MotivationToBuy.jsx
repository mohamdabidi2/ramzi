import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MotivationToBuy extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="should"> 
            <h1 className="sl">Why should I volunteer ?</h1>
            <img className="ic" src="https://my.mindsetboosting.com/wp-content/uploads/2018/06/cropped-site-icon-2.png"></img>
            <p className="answer">We may not solve world hunger immediately, but we're convinced that by serving with each other in our local communities, we're paving the way for much broader changes. Our individual efforts don't need to be huge—a little bit of change here, a few hours there—but even small efforts quickly add up to make a real difference.

As we work side-by-side and learn from each other, mutual understanding increases, misconceptions can be corrected, and new friendships are built.</p>

            </div>
        );
    }
}
export default MotivationToBuy;