import { Tab } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { JapanData } from "../../../data/japanData";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";

export const JapanSlide = () => {
  const { t } = useTranslation();
  const tabs = JapanData;

  return (
    <SlideTabsLayout pageTitle={t("pages.japan_title")} tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="relative h-full w-full">
          <Tab.Panels className="w-[88vw] mt-6 flex justify-end h-[100%]">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-[60%] mr-[10%] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem?.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          {/*  */}
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center">
            <div className="flex-1 flex items-center">
              <div className="w-[50%]">
                <p>
                  {currentTab?.name} {currentItem?.id}/
                  {currentTab?.items.length}
                </p>
                <h2 className="text-7xl">
                  {t(
                    `japan.${currentTab?.name.toLocaleLowerCase()}.items.${
                      currentItem?.code
                    }.title`
                  )}
                </h2>
                <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
                  {" "}
                  <strong>
                    {t(
                      `japan.${currentTab?.name.toLocaleLowerCase()}.items.${
                        currentItem?.code
                      }.description`
                    )}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
