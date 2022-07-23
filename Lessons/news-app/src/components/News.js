import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articels: [
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "National Tequila Day preparations with Abella Bala - CBS Los Angeles",
                    "description": "Get ready for National Tequila Day with these staples.",
                    "url": "https://www.youtube.com/watch?v=2UsK8CSC15Q",
                    "urlToImage": "https://i.ytimg.com/vi/2UsK8CSC15Q/hqdefault.jpg",
                    "publishedAt": "2022-07-23T17:38:09Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-washington-post",
                        "name": "The Washington Post"
                    },
                    "author": "Laurie McGinley",
                    "title": "For sleep apnea patients with recalled CPAP machines, restless nights - The Washington Post",
                    "description": "Millions of machines used to treat the sleep condition have been recalled.",
                    "url": "https://www.washingtonpost.com/health/2022/07/23/cpap-machine-recall-sleep-apnea/",
                    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MGWUY7XDO4I6ZLTENMR6KFK3MI.jpg&w=1440",
                    "publishedAt": "2022-07-23T17:00:00Z",
                    "content": "Comment on this story Jenny Shields was terrified when she would awaken coughing and spitting up phlegm seeded with black specks. I couldnt figure out what it was, she said. Shields had her house ch… [+12510 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "WION Fineprint | Google fires Engineer claiming AI sentience | International News - WION",
                    "description": "Google has fired an engineer after he made a claim that their Lamda chatbot has a soul. The company said Engineer's claims are 'wholly unfounded'. Watch this...",
                    "url": "https://www.youtube.com/watch?v=BDyHFS4D9aA",
                    "urlToImage": "https://i.ytimg.com/vi/BDyHFS4D9aA/maxresdefault.jpg",
                    "publishedAt": "2022-07-23T16:57:15Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Ari Levy",
                    "title": "Amazon already knows a lot about me, but One Medical takes it to a whole new level - CNBC",
                    "description": "CNBC's Ari Levy explains why he's nervous about Amazon's acquisition of One Medical, his primary health-care provider. He's not alone.",
                    "url": "https://www.cnbc.com/2022/07/23/amazon-one-medical-deal-gives-it-access-to-my-most-personal-info.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107093053-1658525646194-one_medical.jpg?v=1658525686&w=1920&h=1080",
                    "publishedAt": "2022-07-23T16:22:13Z",
                    "content": "For the better part of a decade, One Medical has been my primary care provider. It's convenient, with locations around the Bay Area, and I like being able to schedule a same-day physical or get a qui… [+8555 chars]"
                },
                {
                    "source": {
                        "id": "the-washington-post",
                        "name": "The Washington Post"
                    },
                    "author": "Gabe Hiatt, Hannah Sampson",
                    "title": "Carnival Cruise Line owes rape victim $10 million, jury says - The Washington Post",
                    "description": "A Miami jury determined an ex-crew member for Carnival Cruise Line sexually assaulted a woman in 2018.",
                    "url": "https://www.washingtonpost.com/travel/2022/07/23/carnival-verdict-rape-lawsuit/",
                    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZBUYXWS3RQI6ZMPPZN4L44L7BY.jpg&w=1440",
                    "publishedAt": "2022-07-23T16:06:00Z",
                    "content": "Comment on this story A jury in a federal court in Miami found that Carnival Cruise Line owes $10.2 million to a woman who claimed that a crew member raped her during a 2018 cruise. The verdict del… [+5448 chars]"
                },
                {
                    "source": {
                        "id": "business-insider",
                        "name": "Business Insider"
                    },
                    "author": "Sarah Jackson",
                    "title": "American Airlines CEO says there's 'not a day that goes by' where the airline doesn't have trouble supplying enough pillows, blankets, cups, and food for its flights - Yahoo! Voices",
                    "description": "In addition to the industry-wide pilot shortage, American Airlines says it's seeing other shortages that can affect passengers' experience in-flight.",
                    "url": "https://www.businessinsider.com/american-airlines-supply-strain-shortages-pillows-blankets-cups-food-2022-7",
                    "urlToImage": "https://i.insider.com/62c6b1fb99259b00181e3d86?width=1200&format=jpeg",
                    "publishedAt": "2022-07-23T15:32:55Z",
                    "content": "While the pilot shortage is wreaking havoc on airlines' flight schedules, leading to spates of delays and cancelations, one airline says it's facing additional shortages impacting customer experience… [+1561 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Daily Hodl"
                    },
                    "author": "Daily Hodl Staff",
                    "title": "Tesla Dumping 75% of Its Bitcoin Doesn’t ‘Mean Much,’ Says the World’s Richest Crypto Billionaire ?... - The Daily Hodl",
                    "description": "The CEO of Binance is weighing in after the news broke that electric vehicle maker Tesla unloaded the majority of its Bitcoin (BTC) holdings.",
                    "url": "https://dailyhodl.com/2022/07/23/tesla-dumping-75-of-its-bitcoin-doesnt-mean-much-says-the-worlds-richest-crypto-billionaire-heres-why/",
                    "urlToImage": "https://dailyhodl.com/wp-content/uploads/2022/07/Bitcoin-Doesnt-Mean-Much.jpg",
                    "publishedAt": "2022-07-23T14:30:18Z",
                    "content": "The CEO of Binance is weighing in after the news broke that electric vehicle maker Tesla unloaded the majority of its Bitcoin (BTC) holdings. In a new interview with Fox Business, Binance head Chang… [+2229 chars]"
                }
            ]
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=930aa79f9b2d4e5ab4d46df7f2fc5318"

        try {
            fetch(url).then((res) => res.json())
                .then((json) => {
                    this.setState({
                        articles: json.articles
                    });
                })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h2>Insta News -Top Daily Headlines</h2>
                <div className="row my-4">
                    {this.state.articels.map((element) => {
                        return (
                            <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default News