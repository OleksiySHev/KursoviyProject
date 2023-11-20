import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import '../css/NewsElementPage.css'

const NewsElementPage = () => {
    const {id} = useParams()
    const [newsEl, setNewsEl] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/news/${id}`)
            .then(res => {
                setNewsEl(res.data)
                console.log("Data is load!")
            })
            .catch(err => {
                console.log("Data is not load!")
            })
    }, [id])
    return (
        <div className={'newsElementPage'}>
            <div className={'newsElementPage__title'}>{newsEl?.title}</div>
            <img className={'newsElementPage__img'} src={newsEl?.imgSource} alt=""/>
            <div className={'newsElementPage__text'}>{newsEl?.text}</div>
            <div className={'newsElementPage__date'}>{newsEl?.date}</div>
        </div>
    );
};

export default NewsElementPage;