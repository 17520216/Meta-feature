import React, { useContext, useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import { useInView } from "react-intersection-observer";
import { gsap, TimelineLite, TweenMax } from "gsap";


const MetaFuture = props => {

    const listRef1 = useRef();
    const listRef2 = useRef();
    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });


    let timeout;
    const tl = new TimelineLite();


    useEffect(() => {
        if (listRef1.current) {
            animationOff();
        }
    }, []);
    const animationOff = function () {
        TweenMax.set(boxRef1.current, { y: 150, autoAlpha: 0, opacity: 1 });
        TweenMax.set(boxRef2.current, { y: 150, autoAlpha: 0, opacity: 1 });
        TweenMax.set(boxRef3.current, { y: 150, autoAlpha: 0, opacity: 1 });
        gsap.to(listRef1.current?.children, {
            autoAlpha: 0,
            opacity: 0,
            y: 100,
        });

        gsap.to(listRef2.current?.children, {
            autoAlpha: 0,
            opacity: 0,
            y: 100,
        });

        clearTimeout(timeout);
    };

    const animationOn = function () {
        tl.to(boxRef1.current, 0.4, { y: 0, autoAlpha: 1, opacity: 1 });
        tl.to(boxRef2.current, 0.4, { y: 0, autoAlpha: 1, opacity: 1 }, "+=0.4");
        tl.to(boxRef3.current, 0.4, { y: 0, autoAlpha: 1, opacity: 1 }, "+=0.2");

        timeout = setTimeout(() => {
            gsap.to(listRef1.current?.children, {
                duration: 0.6,
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.3,
            });
            gsap.to(listRef2.current?.children, {
                duration: 0.6,
                opacity: 1,
                autoAlpha: 1,
                y: 0,
                stagger: 0.3,
                delay: 0.6
            });
        }, 200);
    };

    useEffect(() => {
        if (inView) {
            animationOn();
        }
    }, [inView]);

    return (
        <section className="meta-future">
            <span ref={ref} className="viewport"></span>
            <Container>
                <div className="wrap">
                    <h2 className="title">META FUTURE </h2>
                    <div className="block-layer" ref={boxRef1}>
                        <h3 className="name">Layer 1</h3>
                        <p className="content">DEFI & NFT PLATFORM</p>
                    </div>
                    <div className="block-child">
                        <div className="child" ref={listRef1}>
                            <div className="item">MetaFilm (Film Fi)</div>
                            <div className="item">MetaVill</div>
                            <div className="item">MetaWallet</div>
                        </div>
                        <div className="child" ref={listRef2}>
                            <div className="item">Meta Launchpad</div>
                            <div className="item">Creative Platform</div>
                        </div>
                    </div>
                    <div className="block-layer" ref={boxRef2}>
                        <h3 className="name">Layer 2</h3>
                        <p className="content">PROTOCOL VERIFY NFTS</p>
                    </div>
                    <div className="block-layer" ref={boxRef3}>
                        <h3 className="name">Layer 3</h3>
                        <p className="content">MARKETPLACE NFTS & MARKETING PLATFORM</p>
                    </div>
                </div>
            </Container>

        </section>
    )
}

MetaFuture.propTypes = {}

export default MetaFuture