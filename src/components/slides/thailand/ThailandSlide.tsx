import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { ThailandData as tabs } from "../../../data/thailandData";

export const ThailandSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle="Thailand" tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="flex flex-row h-full w-full">
          <div className="h-full w-[40%] flex flex-col justify-start items-start pr-5">
            <p>
              {currentTab?.name} {currentItem?.id}/{currentTab?.items.length}
            </p>
            <h2 className="text-6xl">
              {t(
                `thailand.${currentTab?.code.toLocaleLowerCase()}.items.${
                  currentItem?.code
                }.title`
              )}
            </h2>
            <p className="text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `thailand.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.description`
                )}
              </strong>
            </p>
          </div>
          <Tab.Panels className="w-[60%] flex justify-start h-[100%]">
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
        </div>
      )}
    </SlideTabsLayout>
  );
};
