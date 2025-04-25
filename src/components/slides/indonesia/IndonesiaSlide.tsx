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
          <div className="w-[40%] flex-1 flex pr-5">
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
          <div
            className="w-[60%] h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${currentItem?.img}')` }}
          />
        </div>
      )}
    </SlideTabsLayout>
  );
};
