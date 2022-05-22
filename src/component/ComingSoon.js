import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'
import { TweenMax, Elastic, TimelineLite, gsap } from "gsap";

const ComingSoon = ({
    className = "",
    img = "/images/home/banner-meta-film.png",
    title = "MetaFilm",
    des = `MetaFilm is the revolution that transform the ordinary to the extraordinary, bringing the benefit-focused diversity when experiencing in the art in every movie scene. Users can collect, gather all the valuable NFTs in exchange for greater incentives, and the privilege of "Enjoy- to - Earn" eventually.`
}) => {
    const textRef = useRef();
    const imageRef = useRef();

    const tl = new TimelineLite();


    const animation = () => {
        tl.to(textRef.current, 0.3, { y: 0, autoAlpha: 1, opacity: 1 }, "-=0.6");
        tl.to(imageRef.current, 0.3, { y: 0, autoAlpha: 1, opacity: 1 }, "-=0.4");
    }

    useEffect(() => {
        TweenMax.set(textRef.current, { y: 100, autoAlpha: 0 });
        TweenMax.set(imageRef.current, { y: 100, autoAlpha: 0 });
        setTimeout(() => {
            animation();
        }, 1000);
    }, []);

    return (
        <div className={`section-banner ${className ? className : ""}`}>
            <Container className="content-coming">
                <div className="left" ref={textRef} style={{ opacity: 0 }}>
                    <h2>COMING SOON</h2>
                    <h4>{title}</h4>
                    <div className="banner-text">{des}</div>
                </div>
                <div className="right">
                    <img src={asset(img)} ref={imageRef} alt="" style={{ opacity: 0 }} />
                </div>
            </Container>
        </div>
    )
}

ComingSoon.propTypes = {}

export default ComingSoon