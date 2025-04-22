import { useTranslation } from "react-i18next";
import { IndonesiaData } from "../../../data/indonesiaData";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";

export const IndonesiaSlide = () => {
  const { t } = useTranslation();
  const tabs = IndonesiaData;

  return (
    <SlideTabsLayout pageTitle="Indonesia" tabs={tabs}>
      {({ currentTab, currentItem, selectedItemIndex }) => (
        <div className="w-full flex justify-end h-[90%]">
          <div className="flex-1 flex">
            <div className="w-full">
              <p>
                {currentTab?.name} {selectedItemIndex + 1}/
                {currentTab?.items.length}
              </p>
              <h2 className="text-7xl">
                {t(
                  `indonesia.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.title`
                )}
              </h2>
              <p className="w-[60%] text-sm whitespace-normal font-light mt-[20px]">
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
          <div
            className="w-[60%] mr-15 h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${currentItem?.img}')` }}
          />
        </div>
      )}
    </SlideTabsLayout>
  );
};
