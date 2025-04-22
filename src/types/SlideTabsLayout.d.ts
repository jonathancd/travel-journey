// export interface TabItem<T = any> {
//   id: string | number;
//   name: string;
//   code: string;
//   items: T[];
// }

interface Item {
  id: number;
  code: string;
  img: string;
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
  children: (args: {
    selectedItemIndex: number;
    setSelectedItemIndex: (index: number) => void;
    currentItem: Item | null;
    currentTab: TabItem | null;
  }) => React.ReactNode;
}
