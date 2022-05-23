import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const MetaVill = dynamic(() => import("src/component/MetaVill"));



export default function metaVill() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])
    if (!init) return null;
    return (
        <MasterPageExample pageName="MetaVill">
            <MetaVill />
        </MasterPageExample>
    )
}
