import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CardItem from 'src/component/CardItem'
import Slider from 'react-slick/lib/slider'


const _data = [
  {
    name: "CHARILIE NGUYEN",
    title: "Founder",
    des: "Experienced Vietnamese-American film director, TVC director, stage director, screenwriter, comedian and film producer",
    img: "/images/home/CHARILIE.png",
  },
  {
    name: "NGUYEN PHUONG",
    title: "Co-founder",
    des: "Nguyen Phuong has long-term experience in the entertainment industry in Vietnam and internationally, supporting the role of connecting artists to the Meta Future project.",
    img: "/images/home/NGUYENPHUONG.png",
  },
  {
    name: "QUANG NGUYEN",
    title: "CEO & Co-founder",
    des: "Deputy General Director of Song Viet Corp before taking the role of CEO of Zen Communications. He used to join big corporations such as Dat Viet VAC, POPS World Wide, Early Riser Media Group, FPT",
    img: "/images/home/QUANGNGUYEN.png",
  },
  {
    name: "PHU TRAN",
    title: "Head of Marketing",
    des: "Founder of Design Real production company with many experiences in marketing field such as: QC Leader Gameloft, Marketing Director VNG, Financial Advisor Mekong Capital...",
    img: "/images/home/PHUTRAN.png",
  },
  {
    name: "PHUC PHAM",
    title: "Head of Partnership",
    des: `The female director "millions of views" with many viral works in the community. Famous liveshow performance such as “Mua he khong do”, “My dream - Noo Phuoc Thinh”,...`,
    img: "/images/home/PHUCPHAM.png",

  },
  {
    name: "KIEN PHAN",
    title: "CTO",
    des: "An experienced Full-Stack developer. Solid hands-on experience development for many projects, from small to large, from Website to Mobile App. Famous game project: Real football, Assassin’s Creed…",
    img: "/images/home/KIENPHAN.png",
  },
  {
    name: "HOANG LE",
    title: "CMO",
    des: "Hoang Le has experience in implementing many projects in the field of Digital project manager, Ecommerce manager….",
    img: "/images/home/HOANGLE.png",
  },
]

const CoreTeam = props => {
  const [settings, setSettings] = useState({});
  const [isMobile, setIsMobile] = useState({});


  const checkMobile = () => {
    let w = window.innerWidth;
    if (w <= 1440) {
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
    if (w > 1440) {
      setIsMobile(false);
      setSettings({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
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
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
      });
    }
    if (w <= 820) {
      setSettings({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
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
    <section className="core-team">
      <h2 className="title">CORE TEAM</h2>
      <div className="wrap">
        <Slider {...settings}>
          {_data.map((e, i) =>
            <CardItem key={i} {...e} />
          )}

        </Slider>
      </div>
    </section>
  )
}

CoreTeam.propTypes = {}

export default CoreTeam