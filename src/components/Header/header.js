import React from 'react';
import './header.css';
import img from './banner1.png';

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt="logo" />
        </div>
    )
}

export default Header;

/*

const Header = (props) => {
// console.log("PROPS",props);

    return (
        <div className="Header">
            <img src={img} alt="logo" />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            </div>
    );
};

export default Header*/