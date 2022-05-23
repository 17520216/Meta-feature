
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/banner-meta-wallet.png",
    title: "MetaWallet",
    des: `MetaWallet is also considered as creation warehouse where users can invest in their branding through verifying and minting their own NFTs, especially simply by taking their photos.`
}

export default function metaWallet() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;
    return (
        <MasterPageExample pageName="MetaWallet">
            <ComingSoon {..._data} />
        </MasterPageExample>
    )
}
