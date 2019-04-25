import React, { Component } from 'react';
import axios from 'axios';
const BasketCard = ({ articleName, price, image}) => {

    return (
        <div className="article-show">
            <img className="article-show-img" src={image} alt="" srcset="" />
            <p className="article-show-description">{articleName}</p>
            <p className="article-show-price">{price}</p>
        </div>
    )
}
export  {BasketCard}
class BasketModel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="article-fashion">
                <h1 className="article-fashion-title">Kids Fashion</h1>
                <div className="section-articles-show">
                    {this.state.articles.map(x => {
                        return <BasketCard  articleName={x.articleName} price={x.price} image={x.image} />
                    })}
                </div>
            </section >
        );
    }
}
export default BasketModel;