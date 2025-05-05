import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";
import { TabContent } from "../../utils/TabContent";
import { MaldivesData as tabs } from "../../../data/maldivesData";

export const MaldivesSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle={t(`pages.maldives_title`)}
      tabs={tabs}
      showTabs={false}
      paginationOnLeft={false}
    >
      {({ currentTab, currentItem }) => (
        <div className="w-full h-full flex flex-row">
          <div
            className={`${
              currentItem?.direction === "horizontal"
                ? "w-[60%] 3xl:w-[70%]"
                : "w-[30%] 3xl:w-[40%] "
            } h-full`}
          >
            <TabImg item={currentItem} />
          </div>
          <div
            className={`${
              currentItem?.direction === "horizontal"
                ? "w-[40%] 3xl:w-[30%]"
                : "w-[70%] 3xl:w-[60%]"
            } flex-1 flex pl-5`}
          >
            <TabContent tab={currentTab} item={currentItem} />
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
