import { TabData } from "../types/Tabs";

export const IndonesiaData: TabData[] = [
  {
    id: 1,
    name: "Bali",
    code: "bali",
    items: [
      {
        id: 1,
        code: "tegallalang",
        img: "/images/indonesia/bali_img1.jpg",
      },
      {
        id: 2,
        code: "tirta_empul",
        img: "/images/indonesia/bali_img2.jpg",
      },
      {
        id: 3,
        code: "goa_gajah",
        img: "https://picsum.photos/800/550",
      },
      {
        id: 4,
        code: "penglipuran",
        img: "https://picsum.photos/800/550",
      },
    ],
  },
  {
    id: 2,
    name: "Nusa Penida",
    code: "nusa_penida",
    items: [
      {
        id: 1,
        code: "kelingking",
        img: "/images/indonesia/nusa_penida_img1.jpg",
      },
      {
        id: 2,
        code: "broken_beach",
        img: "/images/indonesia/nusa_penida_img2.jpg",
      },
      {
        id: 3,
        code: "angels_billabong",
        img: "/images/indonesia/nusa_penida_img3.jpg",
      },
    ],
  },
];
