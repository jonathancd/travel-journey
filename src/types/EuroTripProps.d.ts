export interface Item {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface TabEuroTrip {
  id: number;
  name: string;
  items: Item[];
}

export interface EuroTripProps {
  page_title: string;
  tabs: TabEuroTrip[];
}
