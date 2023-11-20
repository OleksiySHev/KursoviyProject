import React from 'react';
import '../css/NewsBlock.css'

const NewsBlock = ({value, index}) => {
    return (
        <div className={'newsBlock'} key={`news${index}`} onClick={() => window.location.href = `/news/${value.id}`}>
            <img src={value.imgSource} alt="img-news"/>
            <div className={'newsBlock__title'}>{value.title}</div>
            <div className={'newsBlock__date'}>{value.date}</div>
        </div>
    );
};

export default NewsBlock;