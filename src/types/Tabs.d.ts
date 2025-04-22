interface Item {
  id: number;
  code: string;
  img: string;
}

export interface TabData {
  id: number;
  background: string;
  name: string;
  code: string;
  items: Item[];
}
