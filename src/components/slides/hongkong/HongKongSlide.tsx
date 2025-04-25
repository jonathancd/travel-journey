import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { HongKongData as tabs } from "../../../data/hongkongData";

export const HongKongSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle="Hong Kong"
      tabs={tabs}
      showTabs={false}
      paginationOnLeft={false}
    >
      {({ currentTab, currentItem }) => (
        <div className="flex flex-row h-full w-full">
          <Tab.Panels className="w-[60vw] flex justify-start h-[100%] pr-5">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-full mr-[10%] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem?.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          <div className="h-full w-[40%] flex flex-col justify-start items-start">
            <p>
              {currentTab?.name} {currentItem?.id}/{currentTab?.items.length}
            </p>
            <h2 className="text-7xl">
              {t(
                `${currentTab?.code.toLocaleLowerCase()}.items.${
                  currentItem?.code
                }.title`
              )}
            </h2>
            <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.description`
                )}
              </strong>
            </p>
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
