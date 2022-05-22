import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import CardItem from 'src/component/CardItem'
import { useInView } from "react-intersection-observer";
import { gsap, TimelineLite, TweenMax } from "gsap";

const Advisor = props => {
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
                stagger: 0.4,
            });
        }, 200);
    };

    useEffect(() => {
        if (inView) {
            animationOn();
        }
    }, [inView]);
    return (
        <section className="advisor">
            <h2 className="title">ADVISOR</h2>
            <span ref={ref} className="viewport"></span>
            <Container>
                <div className="wrap" ref={listRef}>
                    <div className="div" style={{ opacity: 0 }}>
                        <CardItem name="DAO TIEN PHONG" title="Lawyer Advisor" des="Lawyer advisor with 18 years of experience in many fields, especially in the field of technology and blockchain. Some projects participated: Amanotes, HeroesTD, Hanagold, Livetrade, Realbox, Calo Metaverse..." img="/images/home/ad-1.png" />
                    </div>
                    <div className="div" style={{ opacity: 0 }}>
                        <CardItem name="BARRY DO" title="Fintech advisor" des="With 10+ years experience in building and launching products while at Hong Leong Bank as Head of Digital Banking, Digital Transformation Head at Dat Viet Vac, and Chief Sales and Marketing Officer at Timo Digital Bank." img="/images/home/ad-2.png" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

Advisor.propTypes = {}

export default Advisor