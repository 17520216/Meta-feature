import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import CONFIG from "web.config";
import Head from "next/head";
import asset from "@/plugins/assets/asset";
import Header from "src/component/Header";
import Footer from "src/component/Footer";


function MasterPageExample({
  pageName,
  children,
  header,
  imageUrl,
  hidePrevButton = false,
  hideFooter = false,
}) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        nofollow={CONFIG.environment != "production"}
        noindex={CONFIG.environment != "production"}
      />
      <Head>
        <title>
          {CONFIG.site.title} | {pageName || "Trang chủ"}
        </title>
        <meta name="description" content={CONFIG.site.description}></meta>

        <link
          rel="shortcut icon"
          href={asset("/favicon.png")}
        />

        <meta property="og:title" content={CONFIG.site.title} />
        <meta property="og:description" content={CONFIG.site.description} />
        <meta
          property="og:url"
          content={CONFIG.NEXT_PUBLIC_BASE_URL + router.asPath}
        />
        <meta
          property="og:image"
          content={imageUrl || asset("/share.jpg")}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href={asset("/dashkit/fonts/cerebrisans/cerebrisans.css")}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.5/styles/foundation.min.css"
        />
      </Head>

      {/* TRACKING SCRIPTS - CHANGE THE ID TO THE CORRECT ONE*/}
      {/* <GtagScript id="G-EE9VED6EC3" /> */}

      <main className="main">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default MasterPageExample;
