import { MobileSlideSection } from "./MobileSlideSection";
import { HeroData } from "../../data/heroData";
import { EgyptData } from "../../data/egyptData";
import { HongKongData } from "../../data/hongkongData";
import { IndonesiaData } from "../../data/indonesiaData";
import { JapanData } from "../../data/japanData";
import { MaldivesData } from "../../data/maldivesData";
import { ThailandData } from "../../data/thailandData";
import { dataEuroTrip2023, dataEuroTrip2024 } from "../../data/euroTripsData";

import { CountriesListSlide } from "../countries_list/CountriesListSlide";

const slides = [
  {
    key: HeroData,
    i18nextPrefix: "",
    tabs: HeroData,
    title: "About me",
  },
  {
    key: "japan",
    i18nPrefix: "japan",
    tabs: JapanData,
    title: "Japan",
  },
  {
    key: "eurotrip_2024",
    i18nPrefix: "eurotrip_2024",
    tabs: dataEuroTrip2024,
    title: "EuroTrip 2024",
  },
  {
    key: "indonesia",
    i18nPrefix: "indonesia",
    tabs: IndonesiaData,
    title: "Indonesia",
  },
  {
    key: "hongkong",
    i18nPrefix: "",
    tabs: HongKongData,
    title: "Hong Kong",
  },
  {
    key: "eurotrip_2023",
    i18nPrefix: "eurotrip_2023",
    tabs: dataEuroTrip2023,
    title: "EuroTrip 2023 Reunion Familiar",
  },
  {
    key: "maldives",
    i18nPrefix: "",
    tabs: MaldivesData,
    title: "Maldives",
  },
  {
    key: "thailand",
    i18nPrefix: "thailand",
    tabs: ThailandData,
    title: "Thailand",
  },
  {
    key: "egypt",
    i18nPrefix: "",
    tabs: EgyptData,
    title: "Egypt",
  },
];

export const HomePageMobile = () => {
  return (
    <div className="min-h-screen bg-white pt-[60px]">
      <div className="h-full"></div>
      {slides.map((slide) => (
        <MobileSlideSection key={slide.key} slide={slide} />
      ))}
      <CountriesListSlide />
    </div>
  );
};
