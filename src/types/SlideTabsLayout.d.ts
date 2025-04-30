import React from "react";

interface Item {
  id: number;
  code: string;
  img: string;
  objectPosition?: string;
  alt?: string;
}

export interface TabItem {
  id: number;
  name: string;
  code: string;
  items: Item[];
}

export interface SlideTabsLayoutProps {
  pageTitle: string;
  tabs: TabItem[];
  showTabs?: boolean;
  paginationOnLeft?: boolean;
  children: (args: {
    selectedItemIndex: number;
    setSelectedItemIndex: (index: number) => void;
    currentItem: Item | null;
    currentTab: TabItem | null;
  }) => React.ReactNode;
}
