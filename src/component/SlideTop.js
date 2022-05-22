import asset from "@/plugins/assets/asset";
import React, { useContext, useEffect, useState, useRef } from "react";
import { TweenMax, TimelineLite, gsap } from "gsap";
import { useInView } from 'react-intersection-observer';

export default function SlideTop({
    children,
    timeDelay = 100,
    transform = "50px",
    transformX = "0",
    topView = "30%",
    leftView = "50%",
    position = "relative",
    timeShow = 0.5,
    timeShow2 = 0.8,
}) {

    const [countAni, setCountAni] = useState(0);
    const aniRef = useRef();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    const tl1 = new TimelineLite();
    let timeout;

    const animationIn2 = function () {
        tl1.add(
            TweenMax.staggerTo(
                aniRef.current,
                timeShow2,
                { y: 0, x: 0, autoAlpha: 1 },
                timeShow
            )
        );
        // clearTimeout(timeout)
    };

    useEffect(() => {
        if (inView === true && countAni === 0) {
            timeout = setTimeout(() => { animationIn2() }, timeDelay);
            setCountAni(1);
        }
    }, [inView]);

    useEffect(() => {
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return <div >
        <div className="aniSlideTop" ref={aniRef}>
            <span ref={ref}></span>
            {children}
        </div>
        <style jsx>{`
            .aniSlideTop{
                transform: translate(${transformX}, ${transform});
                opacity: 0;
                position: ${position};
                span{
                    width: 0;
                    height: 0;
                    position: absolute;
                    left: ${leftView};
                    top: ${topView};
                }
            }
        `}</style>
    </div>
}