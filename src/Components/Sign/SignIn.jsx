import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: '',
            pwd: '',
            user: {},
            state:false
        }
    }
    mailChange = (event) => {
        if (event.target.value != "") {
            this.setState({ mail: event.target.value });
        }
    }
    pwdChange=(event)=>{
        if (event.target.value != "") {
            this.setState({ pwd: event.target.value });
        }
    }

login=()=>{
    // console.log(this.state.mail, this.state.pwd)
    axios.post("http://localhost:4000/login", {
        email: this.state.mail,
        password: this.state.pwd
    })
    .then(res => {if (
        this.state.mail===res.data.email && this.state.pwd=== res.data.password ) {
            this.setState({
                state:true
            }, () => {
                console.log(this.state.state);
                this.props.history.push('/Donate')
            })
        }
        
    })
    // .then(res => {res.json()} )
    // .then(result => console.log(result))

    
}
   
    render() {
        return (
            <section className="section-sign">
                <h1 className="sign-title">Sing in</h1>
                <form onSubmit={(e) => this.redirect(e)} action="" className="sign-form">
                    <input type="text" placeholder="E-mail" onChange={this.mailChange} className="sign-input" />
                    <input type="text" placeholder="Password" onChange={this.pwdChange} className="sign-input" />
                    <div className="sign-redirect">
                        <span className="sign-redirect-text">Don't have an account? Click here to </span>
                        <Link className="sign-redirect-link" to="/SignUp">Sign up</Link>
                    </div>
                    <button type="submit" onClick={(event) => {event.preventDefault(); this.login()}} className="sign-submit" >
                    Log in
                    </button>
                </form>
            </section >
        );
    }
}
export default SignIn;