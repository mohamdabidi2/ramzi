import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            phone:"",
            adress:"",
            email:"",
            password:"",
            points:""

        }
    }
    firstNameChange = (event) => {
        if (event.target.value != "") {
            this.setState({ firstName: event.target.value });
            console.log(event.target.value)
        }
    }
    lastNameChange = (event) => {
        if (event.target.value != "") {
            this.setState({ lastName: event.target.value });
        }
    }
    phoneChange = (event) => {
        if (event.target.value != "") {
            this.setState({ phone: event.target.value });
        }
    }
    adressChange = (event) => {
        if (event.target.value != "") {
            this.setState({ adress: event.target.value });
        }
    }
    passwordChange = (event) => {
        if (event.target.value != "") {
            this.setState({ password: event.target.value });
        }
    }
    emailChange = (event) => {
        if (event.target.value != "") {
            this.setState({ email: event.target.value });
        }
    }
    signup=()=>{
        axios.post("http://localhost:4000/users", {
      
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phone:this.state.phone,
            adress:this.state.adress,
            email:this.state.email,
            password:this.state.password,
            
          })
          .then(res=> console.log(res))
          .catch(err => console.log(err))
        
          this.props.history.push('/SignIn')
     }
   
  
    render() { 
        return (
            <section className="section-sign">
                <h1 className="sign-title">Sing up</h1>
                <form action="" className="sign-form" >
                    <input type="text" placeholder="First name" onChange={this.firstNameChange} className="sign-input" />
                    <input type="text" placeholder="Last name" onChange={this.lastNameChange} className="sign-input" />
                    <input type="text" placeholder="Phone number" onChange={this.phoneChange} className="sign-input" />
                    <input type="text" placeholder="Adress" onChange={this.adressChange} className="sign-input" />
                    <input type="text" placeholder="email" onChange={this.emailChange} className="sign-input" />
                    <input type="text" placeholder="Password" onChange={this.passwordChange} className="sign-input" />
                    <div className="sign-redirect">
                        <span className="sign-redirect-text">Already have an account? Click here to </span>
                        <Link className="sign-redirect-link" to="/SignIn">Sign in</Link>
                    </div>
                    <button type="submit" onClick={(event) => {event.preventDefault();this.signup()}}  className="sign-submit">
                   Sign up 
                    </button>
                </form>
            </section >
        );
    }
}
export default SignUp;