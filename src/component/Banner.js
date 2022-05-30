import asset from '@/plugins/assets/asset'
import React, { useRef, useEffect } from 'react'
import Container from 'src/component/Container'
import { TweenMax, Elastic, TimelineLite, gsap } from "gsap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


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
    const particlesInit = async (main) => {

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        if (container?.canvas?.size?.height) {
            container.canvas.originalStyle.cssText = "width: 100% !important; height: 100% !important; position: relative !important; z-index: 0 !important; top: 0"
        }

        console.log(container);
    };

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
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    fullscreen={{ enable: false, zIndex: 0 }}
                    height={"100px"}
                    className={"education-experience-particles"}
                    canvasClassName="test"
                    options={{
                        fullscreen: { enable: false, zIndex: 0 },
                        background: {
                            color: "transparent"
                        },
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40
                                },
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 6,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800
                                },
                                value: 80
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        }
                    }}
                />
            </div>
        </section>
    )
}

export default Banner