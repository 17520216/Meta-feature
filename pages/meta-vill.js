import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const MetaVill = dynamic(() => import("src/component/MetaVill"));



export default function metaVill() {
    return (
        <MasterPageExample pageName="MetaVill">
            <MetaVill />
        </MasterPageExample>
    )
}
