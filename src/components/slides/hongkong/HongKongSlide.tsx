import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";
import { TabContent } from "../../utils/TabContent";
import { HongKongData as tabs } from "../../../data/hongkongData";

export const HongKongSlide = () => (
  <SlideTabsLayout
    pageTitle="Hong Kong"
    tabs={tabs}
    showTabs={false}
    paginationOnLeft={false}
  >
    {({ currentTab, currentItem }) => (
      <div className=" w-full h-full flex flex-row">
        <div className="w-[30%] 3xl:w-[40%] h-full">
          <TabImg item={currentItem} />
        </div>
        <div className="w-[70%] 3xl:w-[60%] flex-1 flex pl-5">
          <TabContent tab={currentTab} item={currentItem} />
        </div>
      </div>
    )}
  </SlideTabsLayout>
);
