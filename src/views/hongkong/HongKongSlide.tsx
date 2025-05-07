import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../layouts/SlideTabsLayout";
import { TabImg } from "../../components/utils/TabImg";
import { TabContent } from "../../components/utils/TabContent";
import { HongKongData as tabs } from "../../data/hongkongData";

export const HongKongSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle={t("pages.hong_kong_title")}
      tabs={tabs}
      showTabs={false}
      paginationOnLeft={false}
    >
      {({ currentTab, currentItem }) => (
        <div className=" w-full h-full flex flex-row">
          <div className="w-[40%] lg:w-[30%] 3xl:w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
          <div className="w-[60%] lg:w-[70%] 3xl:w-[60%] flex-1 flex pl-5">
            <TabContent tab={currentTab} item={currentItem} />
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
