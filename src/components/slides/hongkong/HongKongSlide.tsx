import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { HongKongData as tabs } from "../../../data/hongkongData";
import { TabImg } from "../../utils/TabImg";

export const HongKongSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle="Hong Kong"
      tabs={tabs}
      showTabs={false}
      paginationOnLeft={false}
    >
      {({ currentTab, currentItem }) => (
        <div className=" w-full h-full flex flex-row">
          <div className="w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
          <div className="w-[70%] 3xl:w-[60%] flex-1 flex pl-5">
            <div className="w-full">
              <p>
                {currentTab?.name} {currentItem?.id}/{currentTab?.items.length}
              </p>
              <h2 className="text-6xl">
                {t(
                  `${currentTab?.code.toLocaleLowerCase()}.items.${
                    currentItem?.code
                  }.title`
                )}
              </h2>
              <p className="text-sm whitespace-normal font-light mt-[20px]">
                <strong>
                  {t(
                    `${currentTab?.code.toLocaleLowerCase()}.items.${
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
