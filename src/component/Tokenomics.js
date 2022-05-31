import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'
import { useInView } from "react-intersection-observer";
import { gsap, TimelineLite, TweenMax } from "gsap";

const Tokenomics = props => {
    const listRef = useRef();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });


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
            y: 100,
        });
        clearTimeout(timeout);
    };

    const animationOn = function () {
        timeout = setTimeout(() => {
            gsap.to(listRef.current?.children, {
                duration: 0.6,
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.3,
            });
        }, 200);
    };

    useEffect(() => {
        if (inView) {
            animationOn();
        }
    }, [inView]);

    return (
        <section className="tokenomics">
            <Container className="contain-token">
                <span ref={ref} className="viewport"></span>
                <h2 className="title">TOKENOMICS</h2>
                <div className="wrap" ref={listRef}>
                    <div className="item left" style={{ opacity: 0 }}>
                        <p>Token</p>
                        <div className="token-box">
                            <div className="item-box item1">
                                <span>Seed</span><span className="bold">5%</span>
                            </div>
                            <div className="item-box item2">
                                <span>Private</span><span className="bold">12%</span>
                            </div>
                            <div className="item-box item3">
                                <span>IDO</span><span className="bold">2%</span>
                            </div>
                        </div>

                        <img srcSet={asset("/images/home/token-left.png 2x")} alt="" />
                    </div>
                    <div className="item right" style={{ opacity: 0 }}>
                        <p>Fund</p>
                        <div className="token-box">
                            <div className="item-box item1">
                                <span className="bold">15%</span><span>Core Team</span>
                            </div>
                            <div className="item-box item2">
                                <span className="bold">15%</span><span>Marketing</span>
                            </div>
                            <div className="item-box item3">
                                <span className="bold">10%</span><span>Development Fund</span>
                            </div>
                            <div className="item-box item4">
                                <span className="bold">10%</span><span>KOLs Reward</span>
                            </div>
                            <div className="item-box item5">
                                <span className="bold">10%</span><span>Liquidity</span>
                            </div>
                            <div className="item-box item6">
                                <span className="bold">8%</span><span>Staking Reward</span>
                            </div>
                            <div className="item-box item7">
                                <span className="bold">7%</span><span>Owner Partner</span>
                            </div>
                            <div className="item-box item8">
                                <span className="bold">3%</span><span>Farming Reward</span>
                            </div>
                            <div className="item-box item9">
                                <span className="bold">3%</span><span>Advisor</span>
                            </div>
                        </div>
                        {/* <img srcSet={asset("/images/home/token-right.png 2x")} alt="" /> */}
                    </div>
                </div>
            </Container>
        </section>
    )
}

Tokenomics.propTypes = {}

export default Tokenomics