import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import SliderItem from 'src/component/SliderItem'
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { TweenMax, Elastic, TimelineLite, gsap } from "gsap";
import SlideTop from 'src/component/SlideTop';



const _dataSlider = [
    {
        title: "METAVERSE BEING",
        des: "Therefore, these 5 DeFi & NFT platforms appear to align with the vision of opening a new gateway of the creative virual space.",
        img: "/images/home/slider-being-1.png 2x",
    },
    {
        title: "CHARACTER AI CREATIVE",
        des: "Depending on your desired character, MFG will produce it into an NFT character accordingly, which can be served for different purposes. Once that NFT character is minted, you are granted your true ownership to use all kinds of features provided on the platform.",
        img: "/images/home/slider-being-2.png 2x",
        isSmall: "item3"
    },
    {
        title: "NFT COLLECTION",
        des: "As a digital collection, MFG facilitates exchangeable NFTs across many fields (sports, films, fashion, artwork, etc.).",
        img: "/images/home/slider-being-3.png 2x",
    }


]

const SectionSlider = props => {
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

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    const sliderRef = useRef();

    const tl = new TimelineLite();


    const animation = () => {
        setTimeout(() => {
            tl.to(sliderRef.current, 0.4, { y: 0, autoAlpha: 1, opacity: 1 });
        }, 300)
    }

    useEffect(() => {
        TweenMax.set(sliderRef.current, { y: 150, autoAlpha: 0, opacity: 1 });
    }, []);

    useEffect(() => {
        if (inView) {
            animation();
        }
    }, [inView]);

    return (
        <section className="section-slider" ref={sliderRef} style={{ opacity: 0 }}>
            <span ref={ref} className="viewport"></span>
            <Container>
                <Slider {...settings}>

                    {
                        _dataSlider.map((e, i) =>
                            <SlideTop timeDelay={200 * i}>
                                <SliderItem key={i} {...e} />
                            </SlideTop>

                        )
                    }
                </Slider>
            </Container>
        </section>
    )
}

SectionSlider.propTypes = {}

export default SectionSlider