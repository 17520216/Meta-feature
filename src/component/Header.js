import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'
import useScroll from '@/plugins/useScroll'
import { useRouter } from 'next/router'



const Header = props => {

    const [fixed, setFixed] = useState(false);
    const { scrollX, scrollY, scrollDirection } = useScroll();

    const router = useRouter();

    const [showMenu, setShowMenu] = useState(false);


    const [init, setInit] = useState(false);

    useEffect(() => {
        if (scrollY && scrollY >= 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }, [scrollY, scrollDirection]);

    useEffect(() => {
        setInit(true);
    }, [])

    const clickMenu = () => {
        document.querySelector(".hamburger").classList.toggle("no-hamburger");
        handleShowMenu();
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }


    if (!init) return null;

    return (
        <header className={`header ${fixed ? "--fixed" : ""}`}>
            <div class="container-fluid">
                <div className="logoMb"><a className={`logo ${fixed ? "--fixed" : ""}`} > <img src={asset("/images/home/logo.png")} alt="" /></a></div>

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
                        <span>Document</span>
                        <div className="sub-menu">
                            <li className="sub">
                                <a href="https://drive.google.com/file/d/18eXuhvWyiIW3JYAsx3jFwAUzk49s95LE/view" target="_blank">Pitch deck</a>
                            </li>
                            <li className="sub">
                                <a href="https://drive.google.com/file/d/1jFy3mE1FqyH9tkFFgGWlX-XUu5kf7g9g/view" target="_blank">Proposal</a>
                            </li>
                        </div>
                    </li>

                    <li className="header__menu-item">
                        <span>Company</span>
                        <div className="sub-menu">
                            <li className="sub">
                                <a href={`${router.asPath === "/" ? "#codeTeam" : "/#codeTeam"}`}>Core Team</a>
                            </li>
                            <li className="sub">
                                <a href="https://metafuture-group.gitbook.io/metafuture/" target="blank">FAQ</a>
                            </li>
                        </div>
                    </li>
                    <li className="header__menu-item">
                        <a href="#footer" href={`${router.asPath === "/" ? "#codeTeam" : "/#codeTeam"}`}>Contact</a>
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
                            <a className="active" href="/">Home</a>
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
                            <span>Document</span>
                            <div className="sub-menu">
                                <li className="sub">
                                    <a href="https://drive.google.com/file/d/18eXuhvWyiIW3JYAsx3jFwAUzk49s95LE/view" target="_blank">Pitch deck</a>
                                </li>
                                <li className="sub">
                                    <a href="https://drive.google.com/file/d/1jFy3mE1FqyH9tkFFgGWlX-XUu5kf7g9g/view" target="_blank">Proposal</a>
                                </li>
                            </div>
                        </li>

                        <li className="header__menu-item">
                            <span>Company</span>
                            <div className="sub-menu">
                                <li className="sub">
                                    <a href={`${router.asPath === "/" ? "#codeTeam" : "/#codeTeam"}`} onClick={() => setShowMenu(false)}>Core Team</a>
                                </li>
                                <li className="sub">
                                    <a href="https://metafuture-group.gitbook.io/metafuture/" target="blank">FAQ</a>
                                </li>
                            </div>
                        </li>
                        <li className="header__menu-item">
                            <a href="#footer" onClick={() => setShowMenu(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </header >
    )
}

Header.propTypes = {}

export default Header
