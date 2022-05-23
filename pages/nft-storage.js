
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/nft-storage.png",
    title: "NFT Storage",
    des: `A place to store and exchange NFT items for all members participating in MFG. MFG is available for everyone with no restriction at all so that anyone can access these inexhaustible resources.`
}

export default function nftStorage() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;
    return (
        <MasterPageExample pageName="NFT Storage">
            <ComingSoon {..._data} />
        </MasterPageExample>
    )
}
