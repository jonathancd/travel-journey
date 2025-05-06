import ReactFullpage from "@fullpage/react-fullpage";
import tippy from "tippy.js";
import { useEffect, useMemo, useState } from "react";
import { CountriesListSlide } from "../countries_list/CountriesListSlide";
import { EgyptSlide } from "../egypt/EgyptSlide";
import { EuroTripSlide } from "../eurotrip/EuroTripSlide";
import { HomeSlide } from "./HomeSlide";
import { HongKongSlide } from "../hongkong/HongKongSlide";
import { IndonesiaSlide } from "../indonesia/IndonesiaSlide";
import { JapanSlide } from "../japan/JapanSlide";
import { MaldivesSlide } from "../maldives/MaldivesSlide";
import { OthersTravelsSlide } from "../others_travels/OthersTravelsSlide";
import { ThailandSlide } from "../thailand/ThailandSlide";
import { ScrollArrow } from "../../components/utils/ScrollArrow";
import { dataEuroTrip2023, dataEuroTrip2024 } from "../../data/euroTripsData";

export const HomePageDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = useMemo(
    () => [
      { anchor: "home", tooltip: "Home" },
      { anchor: "japan", tooltip: "Japan" },
      { anchor: "indonesia", tooltip: "Indonesia" },
      { anchor: "hong-kong", tooltip: "Hong Kong" },
      { anchor: "eurotrip2024", tooltip: "EuroTrip 2024" },
      { anchor: "eurotrip2023", tooltip: "EuroTrip 2023" },
      { anchor: "maldives", tooltip: "Maldives" },
      { anchor: "thailand", tooltip: "Thailand" },
      { anchor: "egypt", tooltip: "Egypt" },
      // { anchor: "others_travels", tooltip: "Others Travels" },
      { anchor: "countries_list", tooltip: "Countries List" },
    ],
    []
  );

  const hasNext = currentIndex < sections.length - 1;

  useEffect(() => {
    const navLinks = document.querySelectorAll("#fp-nav ul li");

    navLinks.forEach((link, index) => {
      tippy(link, {
        content: sections[index]?.tooltip || "",
        placement: "right",
        animation: "shift-away",
        delay: [100, 50],
        theme: "light",
      });
    });
  }, [sections]);

  useEffect(() => {
    const baseTitle = "Travel Journey";
    document.title =
      baseTitle + " - " + sections[currentIndex]?.tooltip || baseTitle;
  }, [currentIndex, sections]);

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
                <IndonesiaSlide />
              </div>
              <div className="section">
                <HongKongSlide />
              </div>
              <div className="section">
                <EuroTripSlide
                  page_title="Euro Trip 2024"
                  tabs={dataEuroTrip2024}
                  i18n_code="eurotrip_2024"
                />
              </div>
              <div className="section">
                <EuroTripSlide
                  page_title="Euro Trip 2023"
                  tabs={dataEuroTrip2023}
                  i18n_code="eurotrip_2023"
                />
              </div>
              <div className="section">
                <MaldivesSlide />
              </div>
              <div className="section">
                <ThailandSlide />
              </div>
              <div className="section">
                <EgyptSlide />
              </div>
              {/* <div className="section">
                <OthersTravelsSlide />
              </div> */}
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
