import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideLayout } from "../../../layouts/SlideLayout";
import { countriesListTabs as tabs } from "../../../data/countriesListData";
import { CountryCard } from "./partials/CountryCard";

export const CountriesListSlide = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <SlideLayout title={t("pages.country_list")}>
      <Tab.Group
        className="relative mt-20 ml-[10%] h-[70vh] w-full"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List className="w-[88vw] flex justify-center ml-6">
          {tabs.map((tab, i) => (
            <div key={`${i}-tab`} className="py-2">
              <Tab
                key={i}
                className={({ selected }) =>
                  ` cursor-pointer px-15 ${
                    selected ? "text-black" : "text-red-500"
                  }
                    ${i < tabs.length - 1 ? "border-r border-r-gray-400" : ""}
                    `
                }
              >
                {t(`countries_tabs.${tab.type}`)}
              </Tab>
            </div>
          ))}
        </Tab.List>
        {/*  */}
        <div className="relative h-full w-full flex justify-center">
          <Tab.Panels className="w-[70vw] mt-6 h-[100%]">
            {tabs.map((tab, i) => (
              <Tab.Panel key={i} className="flex flex-wrap">
                {tab.type === "visited"
                  ? tab.countries.map((country, j) => (
                      <CountryCard key={j} country={country} type="visited" />
                    ))
                  : tab.countries.map((country, j) => (
                      <CountryCard key={j} country={country} type="pending" />
                    ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </SlideLayout>
  );
};
