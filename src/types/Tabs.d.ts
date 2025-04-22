interface Item {
  id: number;
  code: string;
  img: string;
}

export interface TabData {
  id: number;
  name: string;
  code: string;
  items: Item[];
}
