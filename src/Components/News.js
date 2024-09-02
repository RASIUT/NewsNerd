import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/everything?q=india&from=2024-08-02&sortBy=publishedAt&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=${this.state.page}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handleNextClick = async () => {
	const url = `https://newsapi.org/v2/everything?q=india&from=2024-08-02&sortBy=publishedAt&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=${this.state.page + 1}&pageSize=6`;
	let data = await fetch(url);
	let parsedData = await data.json();
	this.setState({
	  articles: parsedData.articles,
	  page: this.state.page + 1
	})
  };
  
  handlePrevClick = async () => {
	const url = `https://newsapi.org/v2/everything?q=india&from=2024-08-02&sortBy=publishedAt&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=${this.state.page - 1}&pageSize=6`;
	let data = await fetch(url);
	let parsedData = await data.json();
	this.setState({
	  articles: parsedData.articles,
	  page: this.state.page - 1
	})
  };

  render() {
    return (
      <div className='container my-3'>
        <div className="container my-5">
          <div className="d-flex justify-content-around">
            <button disabled={this.state.page === 1} type="button" className="btn btn-dark m-1" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.totalResults / 6 <= this.state.page} type="button" className="btn btn-dark m-1" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        <div className="row">
          {this.state.articles.map(article => (
            <div className="col-md-4 mb-4" key={article.url}>
              <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News