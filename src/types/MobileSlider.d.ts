import { Item, TabData } from "../../../types/Tabs";

export interface MobileSliderTabsProps {
  tabs: TabData[];
  selectedTabIndex: number;
  setSelectedTabIndex: (index: number) => void;
  setSelectedItemIndex: (index: number) => void;
}

export interface MobileSliderPaginationType {
  items: Item[];
  selectedItemIndex: number;
  onClick: (index: number) => void;
}

export interface PageTitle {
  title: string;
}

export interface MobileSlideSectionProps {
  index: number;
  key: string;
  i18nPrefix: string;
  tabs: TabData;
  title: string;
}

export interface ModalSliderViewerProps {
  index: number;
  tabs: TabData[];
  title: string;
  i18nPrefix: string;
}
