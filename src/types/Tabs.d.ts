export interface Item {
  id: number;
  code: string;
  img: string;
  objectPosition?: string;
  alt?: string;
}

export interface TabData {
  id: number;
  name: string;
  code: string;
  items: Item[];
}
