import React from 'react';

const NewsItem = (props)=>{
    
        const { title, description, imageUrl, newsUrl,publishedAt} = props;
        const date = new Date(publishedAt);    
        
        return (
            <div className="card my-2" >
                <img src={imageUrl} className="card-img-top" alt="..." style={{height: '250px'}}/>

                <div className="card-body">
                    <h5 className="card-title">{title?.slice(0, 45)}...</h5>
                    <p className="card-text">{description?.slice(0, 88)}...</p>
                    <a href={newsUrl} target="_" className="btn btn-sm btn-primary">Read More</a>
                    <p className="card-text text-end"><small className="text-muted">{date.toGMTString()}</small></p>
                </div>
            </div>
        );
    
}

export default NewsItem;