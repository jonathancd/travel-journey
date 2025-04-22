import React, { useEffect, useState } from "react";
import { SlideLayout } from "./SlideLayout";
import { SlidePagination } from "../components/utils/SlidePagination";
import { Tab } from "@headlessui/react";

interface TabItem<T = any> {
  id: string | number;
  name: string;
  code: string;
  items: T[];
}

interface SlideTabsLayoutProps<T = any> {
  pageTitle: string;
  tabs: TabItem<T>[];
  showTabs?: boolean;
  children: (args: {
    selectedItemIndex: number;
    setSelectedItemIndex: (index: number) => void;
    currentItem: any;
    currentTab: TabItem | null;
  }) => React.ReactNode;
}

export const SlideTabsLayout = ({
  pageTitle,
  tabs,
  showTabs = true,
  children,
}: SlideTabsLayoutProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const currentTab =
    selectedTabIndex !== undefined ? tabs[selectedTabIndex] : null;
  const currentItem = currentTab?.items?.[selectedItemIndex];

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
        className="relative mt-20 ml-[10%] h-[80vh] w-full"
      >
        {showTabs && (
          <Tab.List className="w-[88vw] flex justify-center ml-6">
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

        <div className="relative w-full flex justify-center pt-[3rem] h-[calc(80vh-40px)]">
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
              onChange={setSelectedItemIndex}
            />
          )}
        </div>
      </Tab.Group>
    </SlideLayout>
  );
};
