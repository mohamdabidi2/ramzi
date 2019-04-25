import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/AboutDescription'
import WomenFashion from './Components/Shop/WomenFashion';
import MenFashion from './Components/Shop/MenFashion';
import KidsFashion from './Components/Shop/KidsFashion';
import SportFashion from './Components/Shop/SportFashion';
import Donate from './Components/Donate/DonateFormulaire';
import SignIn from './Components/Sign/SignIn';
import SignUp from './Components/Sign/SignUp';
import Basket from './Components/Basket/Basket';
import Organisation from './Components/Shop/organisation/organisation';
import AddPost from './Components/Donate/addpost.js'
class Router extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Add_post" component={AddPost} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Organisation" component={Organisation} />
                <Route path="/About" component={About} />
                <Route path="/Shop/WomenFashion" render={() => <WomenFashion addProduct={this.props.addProduct} />} />
                <Route path="/Shop/MenFashion" render={() => <MenFashion addProduct={this.props.addProduct} />} />
                <Route path="/Shop/KidsFashion" render={() => <KidsFashion addProduct={this.props.addProduct} />} />
                <Route path="/Shop/SportFashion" render={() => <SportFashion addProduct={this.props.addProduct} />} />
                <Route path="/Donate" component={Donate} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/Basket" render={() => <Basket card={this.props.card} />} />


            </div>
        )
    }
}
export default Router;