import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'
import useScroll from '@/plugins/useScroll'



const Header = props => {

    const [fixed, setFixed] = useState(false);
    const { scrollX, scrollY, scrollDirection } = useScroll();

    useEffect(() => {
        if (scrollY && scrollY >= 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }, [scrollY, scrollDirection]);

    return (
        <header className={`header ${fixed ? "--fixed" : ""}`}>
            <div class="container-fluid">
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a className="active" href="#banner">Home</a>
                    </li>

                    <li className="header__menu-item">
                        <a href="#">NFT Collection</a>
                    </li>

                    <li className="header__menu-item">
                        <a href="#">Product</a>
                    </li>
                    <li className="header__menu-item"><a className={`logo ${fixed ? "--fixed" : ""}`} > <img src={asset("/images/home/logo.png")} alt="" /></a></li>
                    <li className="header__menu-item">
                        <a href="#">Document</a>
                    </li>

                    <li className="header__menu-item">
                        <a href="#">Company</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </header >
    )
}

Header.propTypes = {}

export default Header