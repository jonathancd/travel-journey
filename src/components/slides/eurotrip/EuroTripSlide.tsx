import { useTranslation } from "react-i18next";
import { EuroTripProps } from "../../../types/EuroTripProps";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";

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
        <div className="w-full h-full flex flex-row">
          <div className="w-[30%] 3xl:w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
          <div className="w-[70%] 3xl:w-[60%] flex-1 flex pl-5">
            <div className="w-full">
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
        </div>
      )}
    </SlideTabsLayout>
  );
};
