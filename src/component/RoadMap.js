import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import asset from '@/plugins/assets/asset'
import Container from 'src/component/Container'
import useWindowDimensions from '@/plugins/utils/useWindowDimensions'
import { useInView } from "react-intersection-observer";
import { gsap, TimelineLite, TweenMax } from "gsap";

const RoadMap = props => {
    const { height, width } = useWindowDimensions();
    const listRef = useRef();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });


    let timeout;
    const tl = new TimelineLite();


    useEffect(() => {
        if (listRef.current) {
            width > 1024 ?
                animationOff() :
                animationOffMb();
        }
    }, []);
    const animationOff = function () {
        gsap.to(listRef.current?.children, {
            autoAlpha: 0,
            opacity: 0,
            y: 150,
        });

        clearTimeout(timeout);
    };
    const animationOffMb = function () {
        gsap.to(listRef.current?.children, {
            autoAlpha: 0,
            opacity: 0,
        });

        clearTimeout(timeout);
    };

    const animationOn = function () {
        timeout = setTimeout(() => {
            gsap.to(listRef.current?.children, {
                duration: 0.7,
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.3,
            });
        }, 200);
    };
    const animationOnMb = function () {
        timeout = setTimeout(() => {
            gsap.to(listRef.current?.children, {
                duration: 0.7,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.3,
            });
        }, 200);
    };

    useEffect(() => {
        if (inView) {
            width > 1024 ?
                animationOn() :
                animationOnMb();
        }
    }, [inView]);

    console.log('listRef.current?.children', listRef.current?.children);

    return (
        <section className="road-map">
            <Container>
                <span ref={ref} className="viewport"></span>
                <h2 className="title">Road Map</h2>
                <div className="wrap" ref={listRef}>
                    <div className="map-stroke">
                        {width > 1024 ? <img src={asset("/images/home/stroke_road.png")} alt="" /> : <img src={asset("/images/home/stroke_road2.png")} alt="" />}
                    </div>
                    <div className="item-map map1" style={{ opacity: 0 }}>
                        <div className="img">
                            <img src={asset("/images/home/map-2.png")} alt="" />
                        </div>
                        <p className="description">
                            Seed
                            Private Sales
                            KOLs Contract
                            Brand Contract
                            Whitepaper
                            Website
                            INO MetaVill
                        </p>
                    </div>
                    <div className="item-map map2" style={{ opacity: 0 }}>
                        <div className="img">
                            <img src={asset("/images/home/map-3.png")} alt="" />
                        </div>
                        <p className="description">
                            IDO METAF
                            Public sales
                            List DEX
                            INO orther
                            Event KOLs
                            Blink Box
                            Ticket
                        </p>
                    </div>
                    <div className="item-map map3" style={{ opacity: 0 }}>
                        <div className="img">
                            <img src={asset("/images/home/map-4.png")} alt="" />
                        </div>
                        <p className="description">
                            Staking Reward
                            LauchPad
                            Release Marketplace Ver1
                            Listing token MF
                            Burn METAF
                        </p>
                    </div>
                    <div className="item-map map4" style={{ opacity: 0 }}>
                        <div className="img">
                            <img src={asset("/images/home/map-5.png")} alt="" />
                        </div>
                        <p className="description">
                            Concert Metaverse
                            VR / AR
                            Metaverse Entertainment Central
                            Game Metaverse
                            Movie Metaverse
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

RoadMap.propTypes = {}

export default RoadMap