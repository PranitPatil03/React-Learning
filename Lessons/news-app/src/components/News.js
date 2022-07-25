import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=930aa79f9b2d4e5ab4d46df7f2fc5318&page=1pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePreviousClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=930aa79f9b2d4e5ab4d46df7f2fc5318&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick = async () => {
        console.log("next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=930aa79f9b2d4e5ab4d46df7f2fc5318&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Insta News -Top Daily Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container my-5 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News


