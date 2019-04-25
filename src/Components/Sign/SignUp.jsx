import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:"",
            ferstnameinput:'',
            lastName:"",
            lastnameinput:'',
            phone:"",
            phonenameinput:'',
            adress:"",
            adressnameinput:'',
            email:"",
           emailnameinput:'',
            password:"",
            passwordnameinput:'',
            points:""

        }
    }
    firstNameChange = (event) => {
        if(event.target.value.length<3){
            this.setState({ ferstnameinput: 'memea' });
            console.log(event.target.value)
        }
        else {
            this.setState({ firstName: event.target.value,ferstnameinput:'mead' });
            console.log(event.target.value)
        }
    }
    lastNameChange = (event) => {
     
        if(event.target.value.length<3){
            this.setState({ lastnameinput: 'memea' });
            console.log(event.target.value)
        }
        else {
            this.setState({ lastName: event.target.value,lastnameinput:'mead' });
            console.log(event.target.value)
        }
    }
    phoneChange = (event) => {

          
        if(event.target.value.length<8){
            this.setState({phonenameinput: 'memea' });
            console.log(event.target.value)
        }
        else {
            this.setState({ phone: event.target.value,phonenameinput:'mead' });
            console.log(event.target.value)
        }
    }
    adressChange = (event) => {
     
        if(event.target.value.length<4){
            this.setState({adressnameinput: 'memea' });
            console.log(event.target.value)
        }
        else {
            this.setState({ adress: event.target.value,adressnameinput:'mead' });
            console.log(event.target.value)
        }
    }
    emailChange  = (event) => {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            this.setState({emailnameinput: 'memea' });
        }
       
        else {
            this.setState({ email: event.target.value ,emailnameinput:'mead'});
        }
    }
    passwordChange= (event) => {
        let pass=event.target
        
            if(pass.value.length<6) {
                this.setState({passwordnameinput: 'memea' });
            }
          
            if(!/[0-9]/.test(pass.value)) {
        
                this.setState({passwordnameinput: 'memea' });
            }
           
            if(!/[a-z]/.test(pass.value)) {
                this.setState({passwordnameinput: 'memea' });
            }
           
            if(!/[A-Z]/.test(pass.value)) {
                this.setState({passwordnameinput: 'memea' });
            }
        else{
            this.setState({ password: event.target.value,passwordnameinput:'mead' });
        }
    }
    signup=()=>{
        if( this.state.ferstnameinput=='memea' || this.state.lastnameinput=='memea' || this.state.phonenameinput=='memea' || this.state.adressnameinput=='memea' || this.state.passwordnameinput=='memea' || this.state.emailnameinput=='memea'  ){
            alert ('thebt fi les inputs')
            this.props.history.push('/SignUp')
        }
        else{
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
     }}
   
  
    render() { 
        return (
            <section className="section-sign">
                <h1 className="sign-title">Sing up</h1>
                <form action="" className="sign-form" >
                    <input type="text" placeholder="First name" onChange={this.firstNameChange} className='sign-input ' id={this.state.ferstnameinput}  />
                    <input type="text" placeholder="Last name" onChange={this.lastNameChange} id={this.state.lastnameinput}  className="sign-input" />
                    <input type="number" placeholder="Phone number" id={this.state.phonenameinput}  onChange={this.phoneChange} className="sign-input" />
                    <input type="text" placeholder="Adress" id={this.state.adressnameinput}  onChange={this.adressChange} className="sign-input" />
                    <input type="email" placeholder="email"  id={this.state.emailnameinput}  onChange={this.emailChange} className="sign-input" />
                    <input type="password" id={this.state.passwordnameinput}  placeholder="Password" onChange={this.passwordChange} className="sign-input" />
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