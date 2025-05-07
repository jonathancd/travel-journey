import { useTranslation } from "react-i18next";
import { SlideTabsLayout } from "../../layouts/SlideTabsLayout";
import { TabImg } from "../../components/utils/TabImg";
import { TabContent } from "../../components/utils/TabContent";
import { ThailandData as tabs } from "../../data/thailandData";

const ThailandSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout pageTitle={t("pages.thailand_title")} tabs={tabs}>
      {({ currentTab, currentItem }) => (
        <div className="w-full h-full flex flex-row">
          <div className="w-[60%] lg:w-[70%] 3xl:w-[60%] flex-1 flex pr-5">
            <TabContent
              i18nPrefix="thailand"
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

export default ThailandSlide;
