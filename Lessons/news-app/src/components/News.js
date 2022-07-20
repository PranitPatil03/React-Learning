import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {    
    render() {
        return (
            <div className="container my-3">
                <h2>Insta News -Top Daily Headlines</h2>
                <div className="row my-4">
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" imgUrl="https://www.reuters.com/resizer/XwnA9s6JgPPKpyEUsf4KTVsoKSg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2IUGRQDFARMHVI3RHLLVF3W2EU.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" imgUrl="https://www.reuters.com/resizer/XwnA9s6JgPPKpyEUsf4KTVsoKSg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2IUGRQDFARMHVI3RHLLVF3W2EU.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" imgUrl="https://www.reuters.com/resizer/XwnA9s6JgPPKpyEUsf4KTVsoKSg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2IUGRQDFARMHVI3RHLLVF3W2EU.jpg" />
                    </div>
                </div>                

                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Mytitle" description="this is top news of Day" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News