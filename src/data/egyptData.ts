import { TabItem } from "./../types/SlideTabsLayout.d";

export const EgyptData: TabItem[] = [
  {
    id: 1,
    name: "Cairo",
    code: "cairo",
    items: [
      {
        id: 1,
        code: "giza",
        img: "/images/egypt/cairo1.jpg",
      },
      {
        id: 2,
        code: "nile",
        img: "/images/egypt/cairo2.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Luxor",
    code: "luxor",
    items: [
      {
        id: 1,
        code: "hatshepsut_temple",
        img: "/images/egypt/luxor1.jpg",
      },
      {
        id: 2,
        code: "karnak_template",
        img: "/images/egypt/luxor2.jpg",
      },
      {
        id: 3,
        code: "luxor_temple",
        img: "/images/egypt/luxor3.jpg",
      },
      {
        id: 4,
        code: "valley_of_kings",
        img: "/images/egypt/luxor4.jpg",
      },
    ],
  },
];
