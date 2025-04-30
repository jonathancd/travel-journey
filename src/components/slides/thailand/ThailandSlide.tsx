import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";
import { ThailandData as tabs } from "../../../data/thailandData";

export const ThailandSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle="Thailand" tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="w-full h-full flex flex-row">
          <div className="h-full w-[60%] flex flex-col justify-start items-start pr-5">
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
          <div className="w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
