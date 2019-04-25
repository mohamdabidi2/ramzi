import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer" id='footer'>
               <div className="end">
      <h1>Thank you for visiting us !</h1>
      <h3>contact us</h3>
      <div className="contact">
      <a href="https://www.facebook.com/rfighters"><i className="fab fa-facebook ics"></i></a>
      <a href="https://www.instagram.com/ramzibck/"><i className="fab fa-instagram ics">  </i></a>
        <i className="fas fa-phone-volume ics "></i><h2>+216 44 496 093</h2>
        <i className="far fa-paper-plane ics"></i><h2>Ramzibouchekoua@gmail.com</h2>
      </div>
      <h3 className="copy"> all copyright belongs to BCK Tradding (©)</h3>
    </div>
            </div >
        );
    }
}
export default Footer;