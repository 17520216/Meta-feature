import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const Exchangeable = dynamic(() => import("src/component/Exchangeable"));



export default function exchangeable() {
    return (
        <MasterPageExample pageName="Exchangeable">
            <Exchangeable />
        </MasterPageExample>
    )
}
