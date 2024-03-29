import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // document.title = `${capitalizeFirstLetter(props.category)} - Insta News`

    // capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    const updateNews = async () => {
        props.setProgress(15)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(35)
        let parsedData = await data.json()
        props.setProgress(75)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews()
    },)


    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };



        return (
            <>
<<<<<<< HEAD
                <h1 className="text-center my-3 mb-4" style={{ margin: '35px 0px', marginTop:'90px',paddingTop:'40px'}}>Insta News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
=======
                <h1 className="text-center my-3 mb-4">Insta News - Top {(props.category)} Headlines</h1>
>>>>>>> 590dd75b69ee8712613f197cd02da8d4e471c168
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !==totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage}
                                        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
}


export default News


