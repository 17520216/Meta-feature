import '../styles/style.scss'
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
      });
    });

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
  });

  return (
    <main className="main" data-scroll-container>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
