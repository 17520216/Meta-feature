import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/banner-meta-creation.png",
    name: "Meta Creation",
    des: `If you are not confident to create NFTs from your own images, use MetaCreation to combine all the possessed NFTs to generate new NFTs with various features and privileges..`
}

export default function metaCreation() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;

    return (
        <MasterPageExample pageName="MetaCreation">
            <ComingSoon {..._data} />
        </MasterPageExample>
    )
}
