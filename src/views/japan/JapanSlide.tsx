import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../layouts/SlideTabsLayout";
import { TabImg } from "../../components/utils/TabImg";
import { TabContent } from "../../components/utils/TabContent";
import { JapanData as tabs } from "../../data/japanData";

const JapanSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle={t("pages.japan_title")} tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="w-full h-full flex justify-end">
          <div className="w-[60%] lg:w-[70%] 3xl:w-[60%] flex-1 flex pr-5">
            <TabContent
              i18nPrefix="japan"
              tab={currentTab}
              item={currentItem}
            />
          </div>
          <div className="w-[40%] lg:w-[30%] 3xl:w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};

export default JapanSlide;
