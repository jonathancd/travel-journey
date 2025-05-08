import React from "react";
import { MobileSlideSection } from "./MobileSlideSection";
import { HeroData } from "../../data/heroData";
import { EgyptData } from "../../data/egyptData";
import { HongKongData } from "../../data/hongkongData";
import { IndonesiaData } from "../../data/indonesiaData";
import { JapanData } from "../../data/japanData";
import { MaldivesData } from "../../data/maldivesData";
import { ThailandData } from "../../data/thailandData";
import { dataEuroTrip2023, dataEuroTrip2024 } from "../../data/euroTripsData";
import { MobileSlideSectionProps } from "../../types/MobileSlider";

const CountriesListSlide = React.lazy(
  () => import("../countries_list/CountriesListSlide")
);

const slides: MobileSlideSectionProps[] = [
  {
    index: 1,
    key: "hero",
    i18nPrefix: "",
    tabs: HeroData,
    title: "About me",
  },
  {
    index: 2,
    key: "japan",
    i18nPrefix: "japan",
    tabs: JapanData,
    title: "Japan",
  },
  {
    index: 3,
    key: "eurotrip_2024",
    i18nPrefix: "eurotrip_2024",
    tabs: dataEuroTrip2024,
    title: "EuroTrip 2024",
  },
  {
    index: 4,
    key: "indonesia",
    i18nPrefix: "indonesia",
    tabs: IndonesiaData,
    title: "Indonesia",
  },
  {
    index: 5,
    key: "hongkong",
    i18nPrefix: "",
    tabs: HongKongData,
    title: "Hong Kong",
  },
  {
    index: 6,
    key: "eurotrip_2023",
    i18nPrefix: "eurotrip_2023",
    tabs: dataEuroTrip2023,
    title: "EuroTrip 2023 Reunion Familiar",
  },
  {
    index: 7,
    key: "maldives",
    i18nPrefix: "",
    tabs: MaldivesData,
    title: "Maldives",
  },
  {
    index: 8,
    key: "thailand",
    i18nPrefix: "thailand",
    tabs: ThailandData,
    title: "Thailand",
  },
  {
    index: 9,
    key: "egypt",
    i18nPrefix: "",
    tabs: EgyptData,
    title: "Egypt",
  },
];

export const HomePageMobile = () => {
  return (
    <div className="min-h-screen bg-white pt-[60px]">
      {slides.map((slide) => (
        <MobileSlideSection key={slide.key} slide={slide} />
      ))}
      <CountriesListSlide />
    </div>
  );
};
