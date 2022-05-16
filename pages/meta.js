import dynamic from 'next/dynamic';

import MasterPageExample from 'src/master/MasterPageExample';
const ComingSoon = dynamic(() => import("src/component/ComingSoon"));

export default function Home() {
    return (
        <MasterPageExample pageName="Meta">
            <ComingSoon />
        </MasterPageExample>
    )
}
