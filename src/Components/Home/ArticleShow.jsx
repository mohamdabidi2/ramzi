import React, { Component } from 'react';
import axios from 'axios';
const Card = ({ articleName, price, image, }) => {

    return (
        <div className="article-show">
            <img className="article-show-img" src={image} alt="" srcset="" />
            <p className="article-show-description">{articleName}</p>
            <p className="article-show-price">{price}</p>
        <a href="" className="article-show-add-card">Add To Cart</a>
    </div>
            )
          }
class ArticleShow extends Component {
                constructor(props) {
            super(props)
        this.state = {
                articles: []
    }
}
    componentDidMount() {
                axios.get('/articles').then(res => this.setState({
                    articles: res.data
                }))
                    .catch(err => console.log("err"));
            }
    render() {
        return (
            <section className="section-articles-show">
                {this.state.articles.map(x => {
                    return <Card articleName={x.name} price={x.price} image={x.image}  />
                })}
            </section >
            );
        }
    }
export default ArticleShow;