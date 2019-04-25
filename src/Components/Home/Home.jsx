import React, { Component } from 'react';
import DonateSuggestion from './DonateSuggestion';
import SlideShow from './SlideShow';
import MotivationToBuy from './MotivationToBuy';
import ArticleShow from './ArticleShow';
import DonateSuggestionPoint from './DonateSuggestionPoint';
class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main" style={{marginTop: '-60px'}}>
            <SlideShow />
            <DonateSuggestion />
            <MotivationToBuy />
            <ArticleShow />
            <DonateSuggestionPoint />
          </main>
        );
    }
}
export default Home;