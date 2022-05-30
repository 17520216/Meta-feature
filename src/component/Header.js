import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'
import useScroll from '@/plugins/useScroll'
import { useRouter } from 'next/router'
import { TweenMax, TimelineLite, Power4, gsap } from "gsap";



const Header = props => {

    const [fixed, setFixed] = useState(false);
    const { scrollX, scrollY, scrollDirection } = useScroll();

    const header = useRef();

    const router = useRouter();

    const [showMenu, setShowMenu] = useState(false);



    useEffect(() => {
        if (scrollY && scrollY >= 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }, [scrollY, scrollDirection]);


    const clickMenu = () => {
        document.querySelector(".hamburger").classList.toggle("no-hamburger");
        handleShowMenu();
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const clickMenuMobile = () => {
        setShowMenu(false)
        document.querySelector(".hamburger").classList.toggle("no-hamburger");
    }

    useEffect(() => {
        TweenMax.set(header.current, { opacity: 0 });
        setTimeout(() => {
            TweenMax.to(header.current, 0.5, { opacity: 1 });
        }, 1000);
    }, []);


    return (
        <header className={`header ${fixed ? "--fixed" : ""}`}>
            <div class="container-fluid">
                <div className="logoMb"><a className={`logo ${fixed ? "--fixed" : ""}`} > <img src={asset("/images/home/logo.png")} alt="" /></a></div>

                <ul className="header__menu" ref={header}>
                    <li className="header__menu-item">
                        <a className={`${router.asPath === "/" ? "active" : ""}`} href="/">Home</a>
                    </li>

                    <li className="header__menu-item">
                        <span className={`${router.asPath === "/nft-showroom" || router.asPath === "/exchangeable" || router.asPath === "/nft-storage" ? "active" : ""}`}>NFT Collection</span>
                        <div className="sub-menu">
                            <li className="sub">
                                <a href="/nft-showroom">NTF Showroom</a>
                            </li>
                            <li className="sub">
                                <a href="/exchangeable">Exchangeable NFTs</a>
                            </li>
                            <li className="sub">
                                <a href="nft-storage">NFT Storage</a>
                            </li>
                        </div>
                    </li>

                    <li className="header__menu-item">
                        <span className={`${router.asPath === "/meta-vill" || router.asPath === "/meta-film" || router.asPath === "/meta-wallet" || router.asPath === "/meta-launpad" || router.asPath === "/meta-creation" ? "active" : ""}`}>Product</span>
                        <div className="sub-menu">
                            <li className="sub">
                                <a href="/meta-vill">MetaVill</a>
                            </li>
                            <li className="sub">
                                <a href="/meta-film">MetaFilm</a>
                            </li>
                            <li className="sub">
                                <a href="/meta-wallet">MetaWallet</a>
                            </li>
                            <li className="sub">
                                <a href="/meta-launpad">MetaLaunpad</a>
                            </li>
                            <li className="sub">
                                <a href="/meta-creation">MetaCreation</a>
                            </li>
                        </div>
                    </li>
                    <li className="header__menu-item"><a className={`logo ${fixed ? "--fixed" : ""}`} > <img src={asset("/images/home/logo.png")} alt="" /></a></li>
                    <li className="header__menu-item">
                        <span>Meta Future</span>
                        <div className="sub-menu">
                            <li className="sub">
                                <a href="https://drive.google.com/file/d/18eXuhvWyiIW3JYAsx3jFwAUzk49s95LE/view" target="_blank">Pitch deck</a>
                            </li>
                            <li className="sub">
                                <a href="https://drive.google.com/file/d/1jFy3mE1FqyH9tkFFgGWlX-XUu5kf7g9g/view" target="_blank">Proposal</a>
                            </li>
                            <li className="sub">
                                <a href="#">Whitepaper</a>
                            </li>
                        </div>
                    </li>

                    <li className="header__menu-item">
                        <span>Community</span>
                        {/* <div className="sub-menu">
                            <li className="sub">
                                <a href={`${router.asPath === "/" ? "#codeTeam" : "/#codeTeam"}`}>Core Team</a>
                            </li>
                            <li className="sub">
                                <a href="https://metafuture-group.gitbook.io/metafuture/" target="blank">FAQ</a>
                            </li>
                        </div> */}
                        <div className="sub-menu">
                            <li className="sub">
                                <a target="_blank" href="https://t.me/METAFutureVietnamCommunity">Telegram</a>
                            </li>
                            <li className="sub">
                                <a target="_blank" href="https://www.facebook.com/metafuture.group">Facebook</a>
                            </li>
                            <li className="sub">
                                <a target="_blank" href="https://www.facebook.com/metafuture.group">Twitter</a>
                            </li>
                            <li className="sub">
                                <a target="_blank" href="https://www.linkedin.com/company/meta-future-group-metaverse/">Linkedin</a>
                            </li>
                            <li className="sub">
                                <a target="_blank" href="https://medium.com/@metafuture.group">Medium</a>
                            </li>
                            <li className="sub">
                                <a target="_blank" href="https://discord.gg/xPyUmrYDsB">Discord</a>
                            </li>
                        </div>
                    </li>
                    <li className="header__menu-item">
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={clickMenu}>
                    <div className="bun top"></div>
                    <div className="meat"></div>
                    <div className="bun bottom"></div>
                </div>
                <div className={`menu ${showMenu ? "" : "hide"}`}>
                    <div className="menu-overlay"></div>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <a className={`${router.asPath === "/" ? "active" : ""}`} href="/">Home</a>
                        </li>

                        <li className="header__menu-item">
                            <span className={`${router.asPath === "/nft-showroom" || router.asPath === "/exchangeable" || router.asPath === "/nft-storage" ? "active" : ""}`}>NFT Collection</span>
                            <div className="sub-menu">
                                <li className="sub">
                                    <a href="/nft-showroom">NTF Showroom</a>
                                </li>
                                <li className="sub">
                                    <a href="/exchangeable">Exchangeable NFTs</a>
                                </li>
                                <li className="sub">
                                    <a href="/nft-storage">NFT Storage</a>
                                </li>
                            </div>
                        </li>

                        <li className="header__menu-item">
                            <span className={`${router.asPath === "/meta-vill" || router.asPath === "/meta-film" || router.asPath === "/meta-wallet" || router.asPath === "/meta-launpad" || router.asPath === "/meta-creation" ? "active" : ""}`}>Product</span>
                            <div className="sub-menu">
                                <li className="sub">
                                    <a href="meta-vill">MetaVill</a>
                                </li>
                                <li className="sub">
                                    <a href="/meta-film">MetaFilm</a>
                                </li>
                                <li className="sub">
                                    <a href="meta-wallet">MetaWallet</a>
                                </li>
                                <li className="sub">
                                    <a href="meta-launpad">MetaLaunpad</a>
                                </li>
                                <li className="sub">
                                    <a href="meta-creation">MetaCreation</a>
                                </li>
                            </div>
                        </li>
                        <li className="header__menu-item">
                            <span>Meta Future</span>
                            <div className="sub-menu">
                                <li className="sub">
                                    <a href="https://drive.google.com/file/d/18eXuhvWyiIW3JYAsx3jFwAUzk49s95LE/view" target="_blank">Pitch deck</a>
                                </li>
                                <li className="sub">
                                    <a href="https://drive.google.com/file/d/1jFy3mE1FqyH9tkFFgGWlX-XUu5kf7g9g/view" target="_blank">Proposal</a>
                                </li>
                                <li className="sub">
                                    <a href="#">Whitepaper</a>
                                </li>
                            </div>
                        </li>

                        <li className="header__menu-item">
                            <span>Community</span>
                            {/* <div className="sub-menu">
                                <li className="sub">
                                    <a href={`${router.asPath === "/" ? "#codeTeam" : "/#codeTeam"}`} onClick={clickMenuMobile}>Core Team</a>
                                </li>
                                <li className="sub">
                                    <a href="https://metafuture-group.gitbook.io/metafuture/" target="blank">FAQ</a>
                                </li>
                            </div> */}
                            <div className="sub-menu">
                                <li className="sub">
                                    <a target="_blank" href="https://t.me/METAFutureVietnamCommunity">Telegram</a>
                                </li>
                                <li className="sub">
                                    <a target="_blank" href="https://www.facebook.com/metafuture.group">Facebook</a>
                                </li>
                                <li className="sub">
                                    <a target="_blank" href="https://www.facebook.com/metafuture.group">Twitter</a>
                                </li>
                                <li className="sub">
                                    <a target="_blank" href="https://www.linkedin.com/company/meta-future-group-metaverse/">Linkedin</a>
                                </li>
                                <li className="sub">
                                    <a target="_blank" href="https://medium.com/@metafuture.group">Medium</a>
                                </li>
                                <li className="sub">
                                    <a target="_blank" href="https://discord.gg/xPyUmrYDsB">Discord</a>
                                </li>
                            </div>
                        </li>
                        <li className="header__menu-item">
                            <a href="#footer" onClick={clickMenuMobile}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </header >
    )
}

Header.propTypes = {}

export default Header
