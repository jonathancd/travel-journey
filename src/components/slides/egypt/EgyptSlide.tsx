import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { EgyptData as tabs } from "../../../data/egyptData";

export const EgyptSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle="Lost in Egypt" tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="flex flex-row h-full w-full">
          <div className="h-full w-[30%] flex flex-col justify-start items-start">
            <p>
              {currentTab?.name} {currentItem.id}/{currentTab?.items.length}
            </p>
            <h2 className="text-7xl">
              {t(
                `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                  currentItem.code
                }.title`
              )}
            </h2>
            <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem.code
                  }.description_first`
                )}
              </strong>
            </p>
          </div>
          <Tab.Panels className="w-[40vw] flex justify-start h-[100%]">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-full mr-[10%] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          <div className="h-full w-[30%] flex flex-col justify-end items-start">
            <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem.code
                  }.description_second`
                )}
              </strong>
            </p>
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
