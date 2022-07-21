import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {    

    constructor(){
        super();
        this.state={
            articels:[],
            loading:false
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=930aa79f9b2d4e5ab4d46df7f2fc5318";
        fetch(url).then((res) => res.json()).then((json) => {
                    this.setState({
                        articles: json.articles,
                        loading: false
                    });
                })
    }
    

    render() {
        return (
            <div className="container my-3">
                <h2>Insta News -Top Daily Headlines</h2>
                <div className="row my-4">
                {this.state.articels.map((element) =>{
                    return(
                    <div className="col-md-4 my-2" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    )
                })}
                </div>                
            </div>
        )
    }
}

export default News