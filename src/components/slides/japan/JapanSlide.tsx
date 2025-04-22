import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { JapanData } from "../../../data/japanData";
import { SlideLayout } from "../../../layouts/SlideLayout";
import { PaginationArrow } from "../../pagination/PaginationArrow";
import { PaginationButton } from "../../pagination/PaginationButton";

export const JapanSlide = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { t } = useTranslation();

  const tabs = JapanData;
  const currentTab = tabs[selectedTabIndex];
  const currentItem = currentTab.items[selectedItemIndex];

  useEffect(() => {
    setSelectedItemIndex(0);
  }, [selectedTabIndex]);

  const goNext = () => {
    setSelectedItemIndex((prev) => (prev + 1) % currentTab.items.length);
  };

  const goPrev = () => {
    setSelectedItemIndex(
      (prev) => (prev - 1 + currentTab.items.length) % currentTab.items.length
    );
  };

  return (
    <SlideLayout title={t("pages.japan_title")}>
      <Tab.Group
        className="relative mt-20 ml-[10%] h-[70vh] w-full"
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
      >
        <Tab.List className="w-[88vw] flex justify-center ml-6">
          {tabs.map((tab, i) => (
            <div key={tab.id} className="py-2">
              <Tab
                className={({ selected }) =>
                  ` cursor-pointer px-15 ${
                    selected ? "text-black" : "text-red-500"
                  }
                  ${i < tabs.length - 1 ? "border-r border-r-gray-400" : ""}
                `
                }
              >
                {tab.name}
              </Tab>
            </div>
          ))}
        </Tab.List>
        {/*  */}
        <div className="relative h-full w-full">
          <Tab.Panels className="w-[88vw] mt-6 flex justify-end h-[100%]">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-[60%] mr-[10%] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          {/*  */}
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center">
            <div className="flex-1 flex items-center">
              <div className="w-[50%]">
                <p>
                  {currentTab.name} {currentItem.id} / {currentTab.items.length}
                </p>
                <h2 className="text-7xl">
                  {t(
                    `japanCities.${currentTab.name.toLocaleLowerCase()}.items.${
                      currentItem.code
                    }.title`
                  )}
                </h2>
                <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
                  {" "}
                  <strong>
                    {t(
                      `japanCities.${currentTab.name.toLocaleLowerCase()}.items.${
                        currentItem.code
                      }.description`
                    )}
                  </strong>
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex h-[50px] items-center">
                <div className="flex gap-2 mr-5">
                  <PaginationArrow
                    onClick={goPrev}
                    isDisabled={selectedItemIndex === 0}
                    rotateImage={true}
                    arrowAlt="Previous"
                  />
                  <PaginationArrow
                    onClick={goNext}
                    isDisabled={selectedItemIndex === tabs.length - 1}
                    rotateImage={false}
                    arrowAlt="Next"
                  />
                </div>
                <div className="flex gap-2">
                  {currentTab.items.map((_, i) => (
                    <PaginationButton
                      key={_.id}
                      index={i}
                      selectedIndex={selectedItemIndex}
                      onClick={setSelectedItemIndex}
                    />
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
