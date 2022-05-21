/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";
import { TweenMax, TimelineLite, gsap, Power4 } from "gsap";
import { useInView } from "react-intersection-observer";

import { CloseOutlined } from "@ant-design/icons";
import { PlayIcon } from "src/component/Icon";
import asset from "@/plugins/assets/asset";
export default function BannerVideo() {
  const [mobile, setMobile] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  const playerVideoRef = useRef();
  const wrapRef = useRef();
  const bannerRef = useRef();
  const btnRef = useRef();

  const [play, setPlay] = useState(false);

  const _clickVideo = () => {
    const tl = gsap.timeline();
    playerVideoRef?.current?.player?.player?.play();
    gsap.to(btnRef.current, 0.4, { opacity: 1, scale: 1, autoAlpha: 1 });
    bannerRef.current.getElementsByClassName("contentVideo")[0].style.zIndex =
      "10";

    tl.to(wrapRef.current, 1, {
      autoAlpha: 1,
      x: "100%",
      ease: Power4.easeOut,
    });
    tl.to(playerVideoRef.current, 1, {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeOut,
    });
    setPlay(true);
  };

  const _close = () => {
    const tl = gsap.timeline();
    playerVideoRef?.current?.player?.player?.pause();
    gsap.to(btnRef.current, 0.3, {
      scale: 0,
      opacity: 0,
      autoAlpha: 0,
    });
    bannerRef.current.style.height = "unset";
    bannerRef.current.getElementsByClassName("contentVideo")[0].style.zIndex =
      "unset";

    tl.to(wrapRef.current, 1, {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeOut,
    });
    tl.to(playerVideoRef.current, 1, {
      autoAlpha: 1,
      x: "100%",
      ease: Power4.easeOut,
    });
    setPlay(false);
  };

  const animation = function () {
    const tl = gsap.timeline();
    tl.to(
      wrapRef.current.getElementsByClassName("img"),
      0.8,
      {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut,
      },
      "-=0.5"
    );
    tl.to(
      wrapRef.current.getElementsByClassName("btn"),

      0.2,
      { autoAlpha: 1, opacity: 1, ease: Power4.easeOut },
      "-=0.5"
    );
  };
  useEffect(() => {
    animation();
  }, []);
  useEffect(() => {
    if (inView === false) {
      playerVideoRef?.current?.player?.player?.pause();
    }
  }, [inView]);

  const onReadyVideo = (video) => {
    playerVideoRef?.current?.player?.player?.play();
  };

  return (
    <>
      <div className="banner-art" ref={bannerRef}>
        <div className="btn-close" ref={btnRef} onClick={_close}>
          <div>
            <CloseOutlined />
          </div>
        </div>
        <div className="contentVideo" ref={ref}>
          {play ? (
            <ReactPlayer
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              onReady={onReadyVideo}
              muted={false}
              ref={playerVideoRef}
              playsinline={play}
              playing={play}
              loop
              className="react-player reactVideoPlayer"
              url={"https://www.youtube.com/watch?v=PNmce5giGnA"}
              controls={true}
              width="100%"
              height="100%"
              pip={true}
              config={{
                youtube: {
                  playerVars: {
                    disablekb: 1,
                    showinfo: 0,
                    modestbranding: 1,
                    fs: 0,
                  },
                },
              }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                minHeight: "186px",
              }}
            />
          ) : (
            ""
          )}
          <div ref={wrapRef} className="wrapper">
            <img
              className="img"
              style={{ width: "100%" }}
              src={asset("/images/home/banner-meta-vill.png")}
            />
            <div onClick={_clickVideo} className="btn-play">
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
