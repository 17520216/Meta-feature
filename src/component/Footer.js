import React from 'react'
import PropTypes from 'prop-types'
import { FbICon, LinkInIcon, TeleIcon, TwitterIcon } from 'src/component/Icon'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'

const Footer = props => {
    return (
        <footer className="footer">
            <Container className="container-ft">
                <div className="logo">
                    <a href="/"><img src={asset("/images/home/logo.png")} alt="" /></a>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: <a href="mailto:Culture@metafuture.group">Culture@metafuture.group</a></li>
                        <li>Adress: 68 Upper Serangoon View, Singapore 533884</li>
                        <li>Phone: <a href="tel:+656371 8863">(+65) 6371 8863</a></li>
                    </ul>
                </div>
                <div className="community">
                    <h3>COMMUNITY</h3>

                    <div className="main-community">
                        <ul>
                            <li>
                                <a href="/">
                                    <FbICon />  Facebook
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <TeleIcon />  Telegram
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/">
                                    <TwitterIcon />  Twitter
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <LinkInIcon />  LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

Footer.propTypes = {}

export default Footer