import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
        imagee:"",
        textt:'',
        titlee:""
      }
    }
    Addpost=()=>{
      axios.post("http://localhost:4000/posts", {
      
        userImage:this.state.imagee,
        userName:this.state.titlee,
        postText:this.state.textt,})
    }
  image= (event) => {
    this.setState({ imagee: event.target.value });
    console.log(event.target.value)
  }
  title= (event) => {
    this.setState({ titlee: event.target.value});
  }
  text= (event) => {
    this.setState({ textt: event.target.value});
  }
  render() { 
    return (  
      <div>
         <form action="" className="sign-form" >
                    <input type="text" placeholder="Post Image" onChange={this.image} className='sign-input '/>
                    <input type="text" placeholder="Post title" onChange={this.title}   className="sign-input"/>
                    <input type="text" placeholder="Post Text" className="sign-input"  onChange={this.text} />
                    
                    <button type="submit" onClick={(event) => {event.preventDefault();this.Addpost()}}  className="sign-submit"> Add Post </button>
                                      
                </form>
      </div>
    );
  }
}
 
export default AddPost;