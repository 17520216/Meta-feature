import React from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import SliderItem from 'src/component/SliderItem'
import Slider from "react-slick";

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
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplaySpeed: 2000,
        autoplay: false,
    };
    return (
        <section className="section-slider">
            <Container>
                <Slider {...settings}>

                    {
                        _dataSlider.map((e, i) =>
                            <SliderItem key={i} {...e} />

                        )
                    }
                </Slider>
            </Container>
        </section>
    )
}

SectionSlider.propTypes = {}

export default SectionSlider