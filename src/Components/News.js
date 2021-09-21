import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import {updateNews,fetchOnScroll} from '../actions/news';



const News = (props)=> {

    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);
    let {setprogress}= props;


    useEffect(()=>{
        dispatch(updateNews(props.category,1,props.pageSize,setprogress));
        // eslint-disable-next-line
    },[dispatch]);


    const fetchMoreData = async () => {

        dispatch(fetchOnScroll(props.category,news.page+1,props.pageSize));
        console.log(news);
    }



        return (
            <InfiniteScroll
                dataLength={news.articles?.length}
                next={fetchMoreData}
                hasMore={news.articles?.length < news.totalPages}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <h1>Daily News</h1>
                    {news.loading && <Spinner />}
                    <div className="row">
                        {news.articles?.map((ele, i) => (
                            <div key={i} className="col-xs-12 col-md-4">
                                <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} publishedAt={ele.publishedAt} />
                            </div>
                        ))}
                    </div>

                </div>
            </InfiniteScroll>

        );
    
}

export default News;