import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

const _data = {
    img: "/images/home/banner-meta-launpad.png",
    name: "Meta Launpad",
    des: `Meta Launchpad is also known as “token launchpad for Blockchain projects”. Thanks to it, many projects can easily connect with extensive ecosystems from the world’s leading cryptocurrency exchanges.`
}

export default function metaLaunch() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;

    return (
        <MasterPageExample pageName="MetaLaunch">
            <ComingSoon {..._data} />
        </MasterPageExample>
    )
}
