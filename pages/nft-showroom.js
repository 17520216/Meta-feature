
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/showroom.png",
    title: "NFT Showroom",
    isMeta: false,
    des: `Exhibit NFTs through their favorite characters in an immersive, decentralized environment, so that relish the real-time experience on a wide range of entertainment products. This will become the foundation for amazing features and systems in no distant future.`
}

export default function nftShowroom() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;
    return (
        <MasterPageExample pageName="MetaFilm">
            <ComingSoon className="showroom" {..._data} />
        </MasterPageExample>
    )
}
