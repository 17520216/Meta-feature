import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import MasterPageExample from 'src/master/MasterPageExample';
import { Parallax } from 'react-scroll-parallax';


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

  const [init, setInit] = useState(false);


  useEffect(() => {
    setInit(true);
  }, [])


  if (!init) return null;

  return (
    <MasterPageExample>
      <Parallax className="prl">
        <Banner />
        <SectionSlider />
        <MetaFuture />
        <MetaToken />
        <Tokenomics />
        <RoadMap />
        <Partner />
        <CoreTeam />
        <Advisor />
      </Parallax>
    </MasterPageExample>
  )
}
