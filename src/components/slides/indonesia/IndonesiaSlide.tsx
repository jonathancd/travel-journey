import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";
import { IndonesiaData as tabs } from "../../../data/indonesiaData";

export const IndonesiaSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle="Indonesia" tabs={tabs}>
      {({ currentTab, currentItem, selectedItemIndex }) => (
        <div className="w-full h-full flex justify-end">
          <div className="w-[70%] 3xl:w-[60%] flex-1 flex pr-5">
            <div className="w-full">
              <p>
                {currentTab?.name} {selectedItemIndex + 1}/
                {currentTab?.items.length}
              </p>
              <h2 className="text-6xl">
                {t(
                  `indonesia.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.title`
                )}
              </h2>
              <p className="text-sm whitespace-normal font-light mt-[20px]">
                <strong>
                  {t(
                    `indonesia.${currentTab?.code.toLocaleLowerCase()}.items.${
                      currentItem?.code
                    }.description`
                  )}
                </strong>
              </p>
            </div>
          </div>
          <div className="w-[30%] 3xl:w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
