import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import MasterPageExample from 'src/master/MasterPageExample';
const Exchangeable = dynamic(() => import("src/component/Exchangeable"));



export default function exchangeable() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, [])

    if (!init) return null;
    return (
        <MasterPageExample pageName="Exchangeable">
            <Exchangeable />
        </MasterPageExample>
    )
}
