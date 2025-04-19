import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import { EgyptSlide } from "../components/slides/egypt/EgyptSlide";
import { EuroTripSlide } from "../components/slides/eurotrip/EuroTripSlide";
import { HomeSlide } from "../components/slides/home/HomeSlide";
import { HongKongSlide } from "../components/slides/hongkong/HongKongSlide";
import { IndonesiaSlide } from "../components/slides/indonesia/IndonesiaSlide";
import { JapanSlide } from "../components/slides/japan/JapanSlide";
import { MaldivesSlide } from "../components/slides/maldives/MaldivesSlide";
import { OthersSlide } from "../components/slides/others/OthersSlide";
import { ThailandSlide } from "../components/slides/thailand/ThailandSlide";
import { ScrollArrow } from "../components/utils/ScrollArrow";

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const anchors = [
    "home",
    "japan",
    "hong-kong",
    "egypt",
    "thailand",
    "maldives",
    "indonesia",
    "eurotrip",
    "others",
  ];
  const hasNext = currentIndex < anchors.length - 1;

  return (
    <>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        navigation={true}
        navigationPosition="left"
        scrollingSpeed={700}
        credits={{ enabled: false }}
        anchors={anchors}
        lockAnchors={false}
        afterLoad={(origin, destination) => {
          setCurrentIndex(destination.index);
        }}
        render={() => {
          return (
            <>
              <div className="section">
                <HomeSlide />
              </div>
              <div className="section">
                <JapanSlide />
              </div>
              <div className="section">
                <HongKongSlide />
              </div>
              <div className="section">
                <EgyptSlide />
              </div>
              <div className="section">
                <ThailandSlide />
              </div>
              <div className="section">
                <MaldivesSlide />
              </div>
              <div className="section">
                <IndonesiaSlide />
              </div>
              <div className="section">
                <EuroTripSlide />
              </div>
              <div className="section">
                <OthersSlide />
              </div>
            </>
          );
        }}
      />
      {hasNext && (
        <ScrollArrow onClick={() => window.fullpage_api?.moveSectionDown()} />
      )}
    </>
  );
};
