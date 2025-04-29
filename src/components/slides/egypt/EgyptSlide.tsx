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
          <div className="h-full w-[33%] flex flex-col justify-start items-start pr-5">
            <p>
              {currentTab?.name} {currentItem?.id}/{currentTab?.items.length}
            </p>
            <h2 className="text-6xl">
              {t(
                `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                  currentItem?.code
                }.title`
              )}
            </h2>
            <p className="text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.description_first`
                )}
              </strong>
            </p>
          </div>
          <Tab.Panels className="w-[34vw] flex justify-start h-[100%]">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem?.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          <div className="h-full w-[33%] flex flex-col justify-end items-start pl-5">
            <p className="text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `egypt.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
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
