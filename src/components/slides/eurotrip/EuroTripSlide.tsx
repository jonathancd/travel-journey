import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { SlideLayout } from "../../../layouts/SlideLayout";
import { PaginationArrow } from "../../pagination/PaginationArrow";
import { PaginationButton } from "../../pagination/PaginationButton";
import { EuroTripProps } from "../../../types/EuroTripProps";

export const EuroTripSlide = ({ page_title, tabs }: EuroTripProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

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
    <SlideLayout title={page_title}>
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
        className="relative mt-20 ml-[10%] h-[80vh] w-full"
      >
        <Tab.List className="w-[88vw] flex justify-center ml-6">
          {tabs.map((tab, i) => (
            <div key={tab.id} className="py-2">
              <Tab
                className={({ selected }) =>
                  `cursor-pointer px-15 ${
                    selected ? "text-black" : "text-red-500"
                  }
                  ${i < tabs.length - 1 ? "border-r border-gray-400" : ""}`
                }
              >
                {tab.name}
              </Tab>
            </div>
          ))}
        </Tab.List>

        <div className="relative w-full flex justify-center pt-[3rem] h-[calc(80vh-40px)]">
          <div className="w-full flex justify-end h-[90%]">
            <div
              className="w-[40%] mr-15 h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${currentItem.img}')` }}
            />

            <div className="flex-1 flex">
              <div>
                <p>Item {selectedItemIndex + 1}</p>
                <h2 className="text-4xl font-bold">{currentItem.title}</h2>
                <p className="w-[70%] text-sm font-light mt-4 whitespace-pre-line text-justify">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 flex items-center">
            <div className="flex gap-2 mr-5">
              <PaginationArrow
                onClick={goPrev}
                isDisabled={selectedItemIndex === 0}
                rotateImage={true}
                arrowAlt="Previous"
              />
              <PaginationArrow
                onClick={goNext}
                isDisabled={selectedItemIndex === currentTab.items.length - 1}
                rotateImage={false}
                arrowAlt="Next"
              />
            </div>
            <div className="flex gap-2 ml-4">
              {currentTab.items.map((_, i) => (
                <PaginationButton
                  key={i}
                  index={i}
                  selectedIndex={selectedItemIndex}
                  onClick={setSelectedItemIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </Tab.Group>
    </SlideLayout>
  );
};
