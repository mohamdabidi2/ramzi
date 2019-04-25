import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Shop/WomenFashion';
import {BasketCard} from'../BasketModel';
class Basket extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-basket">
                <i class="fas fa-shopping-cart"></i>
                {this.props.card.length < 1 ? <p className="basket-vide-text">Your basket is empty</p>
                    : <div className="section-articles-show-basket">
                    <div className="articles-show-basket">
                        {this.props.card.map(x => <BasketCard articleName={x.name} image={x.image} price={x.price} />)}</div><button className="basket-btn">Buy</button></div>
                }
                <div className="basket-redirect-to-connect">
                    <p className="basket-redirect-text">Vous avez déjà un compte? </p>
                    <Link className="basket-redirect-link basket-redirect-text" to=""> Connectez-vous </Link>
                    <p classNam="basket-redirect-text" > pour voir les articles dans votre panier.</p>
                </div>

            </section >
        );
    }
}
export default Basket;