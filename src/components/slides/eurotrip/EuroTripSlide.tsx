import { useTranslation } from "react-i18next";
import { EuroTripProps } from "../../../types/EuroTripProps";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { Tab } from "@headlessui/react";

export const EuroTripSlide = ({
  page_title,
  tabs,
  i18n_code,
}: EuroTripProps) => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle={page_title}
      tabs={tabs}
      paginationOnLeft={false}
    >
      {({ currentTab, currentItem }) => (
        <div className="flex flex-row h-full w-full">
          <Tab.Panels className="w-[40vw] flex justify-start h-[100%]">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.id}
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${currentItem.img}')`,
                }}
              />
            ))}
          </Tab.Panels>
          <div className="h-full w-[60%] flex flex-col justify-start items-start pl-5">
            <p>
              {currentTab?.name} {currentItem?.id}/{currentTab?.items.length}
            </p>
            <h2 className="text-6xl">
              {t(
                `${i18n_code}.${currentTab?.code.toLocaleLowerCase()}.items.${
                  currentItem?.code
                }.title`
              )}
            </h2>
            <p className="text-sm whitespace-normal font-light mt-[20px]">
              <strong>
                {t(
                  `${i18n_code}.${currentTab?.code.toLocaleLowerCase()}.items.${
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
