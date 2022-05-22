import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'
import Slider from 'react-slick/lib/slider'
import useWindowDimensions from '@/plugins/utils/useWindowDimensions'
import { useInView } from "react-intersection-observer";
import { gsap, TimelineLite, TweenMax } from "gsap";

const MetaToken = props => {

    const { height, width } = useWindowDimensions();
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplaySpeed: 2000,
        autoplay: false,
    };
    const listRef = useRef();
    const coinRef = useRef();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });


    let timeout;
    const tl = new TimelineLite();

    const animationOff = function () {
        TweenMax.set(coinRef.current, { autoAlpha: 0, opacity: 0, scale: 0 });

        gsap.to(listRef.current?.children, {
            autoAlpha: 0,
            opacity: 0,
            y: 100
        });


        clearTimeout(timeout);
    };

    const animationOn = function () {
        setTimeout(() => {
            tl.to(coinRef.current, 0.3, { autoAlpha: 1, opacity: 1, scale: 1 });
            timeout = setTimeout(() => {
                gsap.to(listRef.current?.children, {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.2,
                });

            }, 200);
        }, 900)
    };

    useEffect(() => {
        if (listRef.current) {
            animationOff();
        }
    }, []);

    useEffect(() => {
        if (inView) {
            animationOn();
        }
    }, [inView]);


    return (
        <section className="meta-token">
            <Container>
                <span ref={ref} className="viewport"></span>
                <h2 className="title">METAF TOKEN</h2>
                <div className="wrap">
                    <div className="coin" ref={coinRef} style={{ opacity: 0 }}>
                        <img src={asset("/images/home/meta-token.png")} alt="" />
                    </div>
                    <div className="list" ref={listRef}>
                        <div className="sub --item1" style={{ opacity: 0 }}>
                            <h3>Diverse Utility</h3>
                            <p className="text">
                                Its utility in this cultural
                                universe is fertile, such as
                                for storage, investment,
                                payment, auction.
                            </p>
                        </div>
                        <div className="sub --item2" style={{ opacity: 0 }}>
                            <h3>Character Development </h3>
                            <p className="text">
                                METAF allows initializing
                                and managing the
                                journey of developing a
                                preferred character
                                inside the Metaverse.
                            </p>
                        </div>
                        <div className="sub --item3" style={{ opacity: 0 }}>
                            <h3>Interconnection </h3>
                            <p className="text">
                                METAF is generated in activities involving
                                creativity, investment, commerce,
                                which has a tight correlation between
                                activities of Meta Future Group (MFG)
                                and its ecosystem.
                            </p>
                        </div>
                        <div className="sub --item4" style={{ opacity: 0 }}>
                            <h3>Sustainability</h3>
                            <p className="text">
                                METAF is built on Blockchain
                                technology, which is impossibly
                                fragmented, duplicated, broken,
                                and has sustainable growth value.
                            </p>
                        </div>
                    </div>
                </div>
                {width <= 1024 &&
                    <Slider {...settings}>
                        <div className="sub">
                            <h3>Diverse Utility</h3>
                            <p className="text">
                                Its utility in this cultural
                                universe is fertile, such as
                                for storage, investment,
                                payment, auction.
                            </p>
                        </div>
                        <div className="sub">
                            <h3>Character Development </h3>
                            <p className="text">
                                METAF allows initializing
                                and managing the
                                journey of developing a
                                preferred character
                                inside the Metaverse.
                            </p>
                        </div>
                        <div className="sub">
                            <h3>Interconnection </h3>
                            <p className="text">
                                METAF is generated in activities involving
                                creativity, investment, commerce,
                                which has a tight correlation between
                                activities of Meta Future Group (MFG)
                                and its ecosystem.
                            </p>
                        </div>
                        <div className="sub">
                            <h3>Sustainability</h3>
                            <p className="text">
                                METAF is built on Blockchain
                                technology, which is impossibly
                                fragmented, duplicated, broken,
                                and has sustainable growth value.
                            </p>
                        </div>
                    </Slider>}

            </Container>
        </section>
    )
}

MetaToken.propTypes = {}

export default MetaToken