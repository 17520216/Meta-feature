import dynamic from 'next/dynamic';
import MasterPageExample from 'src/master/MasterPageExample';
const Banner = dynamic(() => import("src/component/Banner"));
const SectionSlider = dynamic(() => import("src/component/SectionSlider"));
const MetaFuture = dynamic(() => import("src/component/MetaFuture"));
const MetaToken = dynamic(() => import("src/component/MetaToken"));
const Tokenomics = dynamic(() => import("src/component/Tokenomics"));
const RoadMap = dynamic(() => import("src/component/RoadMap"));
const Partner = dynamic(() => import("src/component/Partner"));
const CoreTeam = dynamic(() => import("src/component/CoreTeam"));
const Advisor = dynamic(() => import("src/component/Advisor"));
export default function Home() {
  return (
    <MasterPageExample>
      <Banner />
      <SectionSlider />
      <MetaFuture />
      <MetaToken />
      <Tokenomics />
      <RoadMap />
      <Partner />
      <CoreTeam />
      <Advisor />
    </MasterPageExample>
  )
}
