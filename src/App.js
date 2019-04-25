import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Router from './Router';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        card:[],
        search: ''
}
}
searchMovie = (event) => {
  this.setState({ search: event.target.value })
}
onAddProduct=(card)=>
{
  this.setState({ card: [...this.state.card,card] });
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Router addProduct={this.onAddProduct} card={this.state.card}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
