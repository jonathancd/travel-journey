import { useEffect, useState } from "react";
import { SlideLayout } from "./SlideLayout";
import { SlidePagination } from "../components/utils/SlidePagination";
import { Tab } from "@headlessui/react";
import { SlideTabsLayoutProps } from "../types/SlideTabsLayout";

export const SlideTabsLayout = ({
  pageTitle,
  tabs,
  showTabs = true,
  paginationOnLeft = true,
  children,
}: SlideTabsLayoutProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const currentTab =
    selectedTabIndex !== undefined ? tabs[selectedTabIndex] : null;
  const currentItem =
    selectedItemIndex !== undefined && currentTab?.items
      ? currentTab.items[selectedItemIndex] ?? null
      : null;

  useEffect(() => {
    setSelectedItemIndex(0);
  }, [selectedTabIndex]);

  return (
    <SlideLayout title={pageTitle}>
      <Tab.Group
        {...(showTabs && {
          selectedIndex: selectedTabIndex,
          onChange: setSelectedTabIndex,
        })}
        className="relative w-full max-h-[80vh] min-h-[400px] flex flex-col h-[calc(80vh-40px)]"
      >
        {showTabs && (
          <Tab.List className="flex justify-center ml-6">
            {tabs.map((tab, i) => (
              <div key={tab.id} className="py-2">
                <Tab
                  className={({ selected }) =>
                    `cursor-pointer px-15 ${
                      selected ? "text-black" : "text-red-500"
                    }
                    ${i < tabs.length - 1 ? "border-r border-gray-400" : ""}`
                  }
                >
                  {tab.name}
                </Tab>
              </div>
            ))}
          </Tab.List>
        )}
        <div
          className={`relative w-full flex-1 pt-4 overflow-y-auto h-full ${
            !showTabs ? "mt-[40px]" : ""
          }`}
        >
          {children({
            selectedItemIndex,
            setSelectedItemIndex,
            currentItem,
            currentTab,
          })}

          {currentTab?.items && (
            <SlidePagination
              totalItems={currentTab.items.length}
              currentIndex={selectedItemIndex}
              paginationOnLeft={paginationOnLeft}
              onChange={setSelectedItemIndex}
            />
          )}
        </div>
      </Tab.Group>
    </SlideLayout>
  );
};
