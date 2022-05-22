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
                        <img srcSet={asset("/images/home/token-left.png 2x")} alt="" />
                    </div>
                    <div className="item right" style={{ opacity: 0 }}>
                        <p>Fund</p>
                        <img srcSet={asset("/images/home/token-right.png 2x")} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

Tokenomics.propTypes = {}

export default Tokenomics