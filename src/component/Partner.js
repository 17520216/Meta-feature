import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Container from 'src/component/Container'
import asset from '@/plugins/assets/asset'
import Slider from 'react-slick/lib/slider'


const Partner = props => {
    const [settings, setSettings] = useState({});
    const [isMobile, setIsMobile] = useState({});


    const checkMobile = () => {
        let w = window.innerWidth;
        if (w > 1440) {
            setIsMobile(false);
            setSettings({
                dots: false,
                infinite: true,
                speed: 1500,
                slidesToShow: 7,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
            });
            return;
        }
        if (w > 1024) {
            setIsMobile(false);
            setSettings({
                dots: false,
                infinite: true,
                speed: 1500,
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
            });
        }
        if (w <= 1024) {
            setSettings({
                dots: false,
                infinite: true,
                speed: 1500,
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
            });
        }
        if (w < 767) {
            setSettings({
                dots: false,
                infinite: true,
                speed: 1500,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
            });
        }
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    return (
        <section className="partner">
            <h2 className="title">BACKER, PARTNER & INVESTORS</h2>
            <div className="slider-partner">
                <Slider {...settings}>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-1.png 2x")} alt="" />
                    </div>
                    <div className="item item2">
                        <img srcSet={asset("/images/home/partner-2.png 2x")} alt="" />
                    </div>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-3.png 2x")} alt="" />
                    </div>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-4.png 2x")} alt="" />
                    </div>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-5.png 2x")} alt="" />
                    </div>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-6.png 2x")} alt="" />
                    </div>
                    <div className="item">
                        <img srcSet={asset("/images/home/partner-7.png 2x")} alt="" />
                    </div>
                    <div className="item item8">
                        <img srcSet={asset("/images/home/partner-8.png 2x")} alt="" />
                    </div>
                </Slider>
            </div>

        </section>
    )
}

Partner.propTypes = {}

export default Partner