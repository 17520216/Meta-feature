import asset from '@/plugins/assets/asset'
import React, { useRef, useEffect } from 'react'
import Container from 'src/component/Container'
import { TweenMax, Elastic, TimelineLite, gsap } from "gsap";

const Banner = () => {
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
        <section className="banner">
            <Container>
                <div className="wrap">
                    <div className="text-banner" style={{ opacity: 0 }} ref={textRef}>
                        <h2 className="title-main">META FUTURE GROUP (MFG)</h2>
                        <p className="text">Meta Future Group (MFG) focuses on creating and producing customized characters in the metaverse world to meet different user experiences across diverse means of entertainment media.</p>
                        <div className="btn-main">
                            <a href="https://drive.google.com/file/d/18eXuhvWyiIW3JYAsx3jFwAUzk49s95LE/view" target="_blank">
                                GET TO KNOW US
                            </a>
                        </div>
                    </div>

                </div>
            </Container>
            <div className="img-banner" >
                <img src={asset("/images/home/main-banner.png")} alt="" ref={imageRef} style={{ opacity: 0 }} />
            </div>
        </section>
    )
}

export default Banner