import React from 'react'
import PropTypes from 'prop-types'
import { DiscordIcon, FbICon, LinkInIcon, TeleIcon, TwitterIcon } from 'src/component/Icon'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'

const Footer = props => {
    return (
        <footer className="footer" id="footer">
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
                                <a href="https://www.facebook.com/metafuture.group" target="_blank">
                                    <FbICon />  Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/METAFutureVietnamCommunity" target="_blank">
                                    <TeleIcon />  Telegram
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/xPyUmrYDsB" target="_blank">
                                    Discord
                                </a>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <a href="https://twitter.com/METAFuture3" target="_blank">
                                    <TwitterIcon />  Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/meta-future-group-metaverse/" target="_blank">
                                    <LinkInIcon />  LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@metafuture.group" target="_blank">
                                    Medium
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container >
        </footer >
    )
}

Footer.propTypes = {}

export default Footer