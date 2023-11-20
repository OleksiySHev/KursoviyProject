import React, {useEffect, useState} from 'react';
import '../css/NewsPage.css'
import Slider from "../components/Slider";
import axios from "axios";
import NewsBlock from "../components/NewsBlock";
import ModalNews from "../components/ModalNews";

const NewsPage = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/news')
            .then(res => {
                setNews(res.data)
                console.log("Data is load!")
            })
            .catch(err => {
                console.log("Data is not load!")
            })
    }, [])
    return (
        <div className={'newsPage'}>
            <Slider value={news}/>
            <div className={'newsPage__container'}>
                {news?.map((value, index) => (
                    <NewsBlock value={value} index={index}/>
                ))}
            </div>
            <ModalNews/>
        </div>
    );
};

export default NewsPage;