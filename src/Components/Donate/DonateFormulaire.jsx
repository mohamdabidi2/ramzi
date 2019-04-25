

  import React, { Component } from 'react';
import axios from 'axios';
import './postes.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DonateFormulaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postMe:[],
      activeId: "",
      vue:''
    }
  }
  handlecommentChange = (event) => {
    this.setState({vue:event.target.value});
    console.log(this.state.postMe)
  
    console.log(this.state.vue)
  }

 
  componentDidMount() {
    axios.get("http://localhost:4000/Posts")

      .then(res => this.setState({ posts: res.data })
      );

  }

  render() {

    return (
        <div id='mm54'>
            {this.state.posts.map((el)=>{
                return (
                    <div>
                        <img src={el.userImage} alt=""/>
                                <div className=''>
                           <h1>{el.userName}</h1>
                           <p>{el.postText}</p>
                           <div>
                               {el.comment.map((az)=>{
                                   return (<p>{az}</p>)
                               })}
                           </div>
                                </div>
                    </div>
                )
            })}
        </div>

    );
  }
}

export default DonateFormulaire;