import React, {useEffect} from 'react';
import '../css/Slider.css'
import arrowLeft from '../img/arrow-left-circle-fill.svg';
import arrowRight from '../img/arrow-right-circle-fill.svg';

const Slider = ({value}) => {
    let currentImgId = 0;

    const checkSlider = () => {
        const imgElements = document.querySelectorAll(".slider__img");
        imgElements.forEach((value, index) => {
            if (currentImgId === index) {
                value.style.display = 'block'
            }else {
                value.style.display = 'none'
            }
        })
    }

    const goToNextSlide = () => {
        currentImgId = (currentImgId + 1) % value.length;
        checkSlider(currentImgId);
    }

    const goToPrevSlide = () => {
        currentImgId = (currentImgId - 1 + value.length) % value.length;
        checkSlider(currentImgId);
    }

    useEffect(() => {
        checkSlider()
    }, [value]);


    return (
        <div className={'slider'}>
            <img onClick={goToPrevSlide} className={'slider__arrow arrow__left'} src={arrowLeft} alt=""/>
            {value?.map((value, index) => (
                <img className={'slider__img'} src={value.imgSource} alt={`slider-img-${index}`}/>
            ))}
            <img onClick={goToNextSlide} className={'slider__arrow arrow__right'} src={arrowRight} alt=""/>
        </div>
    );
};

export default Slider;