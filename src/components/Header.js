import React from 'react';
import '../css/Header.css'
import my_logo from '../img/scientific-communication-center-of-the-i-high-resolution-logo-transparent.png'
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()
    return (
        <div className={'header'}>
            <div className={'logo-block'}>
                <img className={'logo'} src={my_logo} alt=""/>
            </div>
            <div className={'menu-block'}>
                <Link className={`menu-block__el ${location.pathname === '/'? 'menu-block__el-active': '' }`} to={'/'}>HOME</Link>
                <Link className={`menu-block__el ${location.pathname === '/news'? 'menu-block__el-active': '' }`} to={'/news'}>NEWS</Link>
                <Link className={`menu-block__el ${location.pathname === '/equipments'? 'menu-block__el-active': '' }`} to={'/equipments'}>EQUIPMENT</Link>
            </div>
        </div>
    );
};

export default Header;