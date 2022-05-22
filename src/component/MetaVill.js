import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from 'src/component/Container'
import BannerVideo from 'src/component/BannerVideo';
import { gsap, TimelineLite, TweenMax } from "gsap";


const MetaVill = props => {
    const listRef = useRef();
    let timeout;
    const tl = new TimelineLite();


    useEffect(() => {
        if (listRef.current) {
            animationOff();
        }
    }, []);
    const animationOff = function () {
        gsap.to(listRef.current?.children, {
            autoAlpha: 0,
            opacity: 0,
            y: 50,
        });
        clearTimeout(timeout);
    };

    const animationOn = function () {
        timeout = setTimeout(() => {
            gsap.to(listRef.current?.children, {
                duration: 0.5,
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.3,
            });
        }, 200);
    };

    useEffect(() => {
        setTimeout(() => {
            animationOn();
        }, 600)
    }, []);
    return (
        <div className="meta-vill">
            <Container className="content-meta">
                <div className="wrap" ref={listRef}>
                    <div className="left" style={{ opacity: 0 }}>
                        <h2 className="title">MetaVill</h2>
                        <p className="text">Metavill is a Social Entertainment Defi Platform. Users can easily generate NFTs then turn them into income by Shooting-to-earn feature.</p>
                        <div className="btn-meta">
                            <a href="/" className="div">
                                Explore more
                            </a>
                        </div>
                    </div>
                    <div className="right" style={{ opacity: 0 }}>
                        <BannerVideo />
                    </div>
                </div>
            </Container>
        </div>
    )
}

MetaVill.propTypes = {}

export default MetaVill