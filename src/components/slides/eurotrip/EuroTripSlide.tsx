import { EuroTripProps } from "../../../types/EuroTripProps";
import { SlideTabsLayout } from "../../../layouts/SlideTabsLayout";
import { TabImg } from "../../utils/TabImg";
import { TabContent } from "../../utils/TabContent";

export const EuroTripSlide = ({
  page_title,
  tabs,
  i18n_code,
}: EuroTripProps) => (
  <SlideTabsLayout pageTitle={page_title} tabs={tabs} paginationOnLeft={false}>
    {({ currentTab, currentItem }) => (
      <div className="w-full h-full flex flex-row">
        <div className="w-[30%] 3xl:w-[40%] h-full">
          <TabImg item={currentItem} />
        </div>
        <div className="w-[70%] 3xl:w-[60%] flex-1 flex pl-5">
          <TabContent
            i18nPrefix={i18n_code}
            tab={currentTab}
            item={currentItem}
          />
        </div>
      </div>
    )}
  </SlideTabsLayout>
);
