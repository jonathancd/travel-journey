import React from "react";

import { Item, TabData } from "./Tabs";

export interface SlideTabsLayoutProps {
  pageTitle: string;
  tabs: TabData[];
  showTabs?: boolean;
  paginationOnLeft?: boolean;
  children: (args: {
    selectedItemIndex: number;
    setSelectedItemIndex: (index: number) => void;
    currentItem: Item | null;
    currentTab: TabData | null;
  }) => React.ReactNode;
}
