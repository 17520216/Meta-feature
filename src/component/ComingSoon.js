import React from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'

const ComingSoon = ({
    className = "",
    img = "/images/home/banner-meta-film.png",
    title = "MetaFilm",
    des = `MetaFilm is the revolution that transform the ordinary to the extraordinary, bringing the benefit-focused diversity when experiencing in the art in every movie scene. Users can collect, gather all the valuable NFTs in exchange for greater incentives, and the privilege of "Enjoy- to - Earn" eventually.`
}) => {
    return (
        <div className={`section-banner ${className ? className : ""}`}>
            <Container className="content-coming">
                <div className="left">
                    <h2>COMING SOON</h2>
                    <h4>{title}</h4>
                    <div className="banner-text">{des}</div>
                </div>
                <div className="right">
                    <img src={asset(img)} alt="" />
                </div>
            </Container>
        </div>
    )
}

ComingSoon.propTypes = {}

export default ComingSoon