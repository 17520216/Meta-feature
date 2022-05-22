import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'
import { gsap, TimelineLite, TweenMax } from "gsap";

const Exchangeable = props => {
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
        <div className="exchangeable">
            <Container className="content-exchangeable">
                <div className="wrap" ref={listRef}>
                    <div className="title" style={{ opacity: 0 }}>
                        Exchangeable NFTs
                    </div>
                    <div className="text" style={{ opacity: 0 }}>
                        The fun part is all the available NFTs can be transferable in return for either relevant items from the other field or lucrative, actual assets in real life, which truly differentiates METAF out from other similar entertainment platforms.
                    </div>
                    <div className="img-main" style={{ opacity: 0 }}>
                        <img src={asset("/images/home/exchange-nft.png")} alt="" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

Exchangeable.propTypes = {}

export default Exchangeable