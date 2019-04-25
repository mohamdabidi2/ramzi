import React, { Component } from 'react';
import axios from 'axios';
const Card = ({ articleName, price, image,addProduct }) => {

    return (
        <div className="article-show">
            <img className="article-show-img" src={image} alt="" srcset="" />
            <p className="article-show-description">{articleName}</p>
            <p className="article-show-price">{price}</p>
            <button onClick={()=>addProduct({articleName,price,image})} className="article-show-add-card">Add To Cart</button>
        </div>
    )
}
export  {Card}
class KidsFashion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get('/articles/Kids').then(res => this.setState({
            articles: res.data
        }))
            .catch(err => console.log("err"));
    }
    render() {
        return (
            <section className="article-fashion">
                <h1 className="article-fashion-title">Kids Fashion</h1>
                <div className="section-articles-show">
                    {this.state.articles.map(x => {
                        return <Card Card addProduct={this.props.addProduct} articleName={x.name} price={x.price} image={x.image} />
                    })}
                </div>
            </section >
        );
    }
}
export default KidsFashion;