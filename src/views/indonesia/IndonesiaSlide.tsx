import { SlideTabsLayout } from "../../layouts/SlideTabsLayout";
import { TabImg } from "../../components/utils/TabImg";
import { TabContent } from "../../components/utils/TabContent";
import { IndonesiaData as tabs } from "../../data/indonesiaData";

const IndonesiaSlide = () => (
  <SlideTabsLayout pageTitle="Indonesia" tabs={tabs}>
    {({ currentTab, currentItem }) => (
      <div className="w-full h-full flex justify-end">
        <div className="w-[60%] lg:w-[70%] 3xl:w-[60%] flex-1 flex pr-5">
          <TabContent
            i18nPrefix="indonesia"
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

export default IndonesiaSlide;
