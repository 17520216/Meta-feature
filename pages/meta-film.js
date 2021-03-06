import dynamic from 'next/dynamic';

import { useState, useEffect } from "react";
import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/banner-meta-film.png",
    name: "MetaFilm",
    des: `MetaFilm is the revolution that transform the ordinary to the extraordinary, bringing the benefit-focused diversity when experiencing in the art in every movie scene. Users can collect, gather all the valuable NFTs in exchange for greater incentives, and the privilege of "Enjoy- to - Earn" eventually.`
}

export default function metaFilm() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;

    return (
        <MasterPageExample pageName="MetaFilm">
            <ComingSoon {..._data} />
        </MasterPageExample>
    )
}
