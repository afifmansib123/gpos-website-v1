// use client

import PageBox from "@/components/common/PageBox";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section4";
import HomeSection3 from "@/components/home/Section3";
import HomeSection4 from "@/components/home/Section5";
import HomeSection5 from "@/components/home/Section2";
import HomeSection6 from "@/components/home/Section6";


export default function Home() {
  return (
    <PageBox>
      <HomeSection1 />
      <HomeSection5 />
      <HomeSection2 />
      {/*<HomeSection3 />*/}
      <HomeSection4 />
      
      <HomeSection6/>
    </PageBox>
  );
}
