import { useTranslation } from "react-i18next";
import { EuroTripProps } from "../../../types/EuroTripProps";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";

export const EuroTripSlide = ({
  page_title,
  tabs,
  i18n_code,
}: EuroTripProps) => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle={page_title} tabs={tabs}>
      {({ currentTab, currentItem, selectedItemIndex }) => (
        <div className="w-full flex justify-end h-[90%]">
          <div
            className="w-[40%] mr-15 h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${currentItem.img}')` }}
          />

          <div className="flex-1 flex">
            <div>
              <p>
                <p>
                  {currentTab?.name} {selectedItemIndex + 1}/
                  {currentTab?.items.length}
                </p>
              </p>
              <h2 className="text-4xl font-bold">
                {t(
                  `${i18n_code}.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.title`
                )}
              </h2>
              <p className="w-[70%] text-sm font-light mt-4 whitespace-pre-line text-justify">
                {t(
                  `${i18n_code}.${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.description`
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
