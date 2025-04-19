import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { JapanCities } from "../../../data/japan";
import { SlideLayout } from '../../../layouts/SlideLayout';
import { PaginationArrow } from "../../pagination/PaginationArrow";
import { PaginationButton } from "../../pagination/PaginationButton";
import { JapanCity } from "./JapanCity";

export const JapanSlide = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();

  const tabs = JapanCities;

  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % tabs.length);
  };

  const goPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <SlideLayout title={t('pages.japan_title')}>
      <Tab.Group className="relative mt-20 ml-[10%] h-[70vh] w-full" selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="w-[88vw] flex justify-center ml-6">
          {tabs.map((tab, i) => (
            <div 
                key={`${i}-tab`} className="py-2">
              <Tab
                key={i}
                className={({ selected }) =>
                  ` cursor-pointer px-15 ${
                    selected
                      ? "text-black"
                      : "text-red-500"
                  }
                  ${
                    i < tabs.length - 1
                    ? 'border-r border-r-gray-400' 
                    : ''
                  }
                `}
              >
                {tab.name}
              </Tab>
            </div>
          ))}
        </Tab.List>
        {/*  */}
        <div className="relative h-full w-full">
          <Tab.Panels className="w-[88vw] mt-6 flex justify-end h-[100%]">
            {tabs.map((tab, i) => (
              <Tab.Panel key={i} className="w-[60%] mr-[10%] bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('${tab.background}')`,
              }}/>
            ))}
          </Tab.Panels>
          {/*  */}
          {/* <div className="absolute flex flex-col justify-center top-0 h-full"> */}
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center">
            <div className="flex-1 flex items-center">
              <JapanCity index={selectedIndex} city={tabs[selectedIndex]} totalCities={tabs.length} />
            </div>
            <div className="mt-auto">
              <div className="flex h-[50px] items-center">
                <div className="flex gap-2 mr-5"> 
                  <PaginationArrow onClick={goPrev} isDisabled={selectedIndex === 0} rotateImage={true} arrowAlt="Previous" />
                  <PaginationArrow onClick={goNext} isDisabled={selectedIndex === tabs.length - 1} rotateImage={false} arrowAlt="Next" />
                </div>
                <div className="flex gap-2">
                  {tabs.map((_, i) => (
                      <PaginationButton key={_.id} index={i} selectedIndex={selectedIndex} onClick={setSelectedIndex}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Group>
    </SlideLayout>
  );
};