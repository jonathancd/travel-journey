export interface Item {
  id: number;
  code: string;
  img: string;
  direction?: string;
  objectPosition?: string;
  alt?: string;
}

export interface TabData {
  id: number;
  name: string;
  code: string;
  items: Item[];
}

export interface TabContentProps {
  i18nPrefix?: string | null | undefined;
  tab?: TabData | null;
  item?: Item | null;
}
