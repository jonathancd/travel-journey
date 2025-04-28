import ReactFullpage from "@fullpage/react-fullpage";
import tippy from "tippy.js";

import { useEffect, useState } from "react";
import { CountriesListSlide } from "../components/slides/countries_list/CountriesListSlide";
import { EgyptSlide } from "../components/slides/egypt/EgyptSlide";
import { EuroTripSlide } from "../components/slides/eurotrip/EuroTripSlide";
import { HomeSlide } from "../components/slides/home/HomeSlide";
import { HongKongSlide } from "../components/slides/hongkong/HongKongSlide";
import { IndonesiaSlide } from "../components/slides/indonesia/IndonesiaSlide";
import { JapanSlide } from "../components/slides/japan/JapanSlide";
import { MaldivesSlide } from "../components/slides/maldives/MaldivesSlide";
import { OthersTravelsSlide } from "../components/slides/others_travels/OthersTravelsSlide";
import { ThailandSlide } from "../components/slides/thailand/ThailandSlide";
import { ScrollArrow } from "../components/utils/ScrollArrow";
import { dataEuroTrip2023, dataEuroTrip2024 } from "../data/euroTripsData";

export const HomePage = () => {
  useEffect(() => {
    const tooltips = [
      "Home",
      "Japan",
      "Hong Kong",
      "Egypt",
      "Thailand",
      "Maldives",
      "Indonesia",
      "EuroTrip 2023",
      "EuroTrip 2024",
      "Others Travels",
      "Countries List",
    ];

    const navLinks = document.querySelectorAll("#fp-nav ul li a");

    navLinks.forEach((link, index) => {
      tippy(link, {
        content: tooltips[index] || "",
        placement: "right",
        animation: "shift-away",
        delay: [100, 50],
        theme: "light",
      });
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    { anchor: "home", tooltip: "Home" },
    { anchor: "japan", tooltip: "Japan" },
    { anchor: "hong-kong", tooltip: "Hong Kong" },
    { anchor: "egypt", tooltip: "Egypt" },
    { anchor: "thailand", tooltip: "Thailand" },
    { anchor: "maldives", tooltip: "Maldives" },
    { anchor: "indonesia", tooltip: "Indonesia" },
    { anchor: "eurotrip2023", tooltip: "EuroTrip 2023" },
    { anchor: "eurotrip2024", tooltip: "EuroTrip 2024" },
    { anchor: "others_travels", tooltip: "Others Travels" },
    { anchor: "countries_list", tooltip: "Countries List" },
  ];

  const hasNext = currentIndex < sections.length - 1;

  return (
    <>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        navigation={true}
        navigationPosition="left"
        scrollingSpeed={700}
        credits={{ enabled: false }}
        anchors={sections.map((item) => item.anchor)}
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
                <EuroTripSlide
                  page_title="Euro Trip 2023"
                  tabs={dataEuroTrip2023}
                  i18n_code="eurotrip_2023"
                />
              </div>
              <div className="section">
                <EuroTripSlide
                  page_title="Euro Trip 2024"
                  tabs={dataEuroTrip2024}
                  i18n_code="eurotrip_2024"
                />
              </div>
              <div className="section">
                <OthersTravelsSlide />
              </div>
              <div className="section">
                <CountriesListSlide />
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
