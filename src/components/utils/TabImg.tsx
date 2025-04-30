import { Item } from "../../types/Tabs";

export const TabImg = ({ item }: { item: Item | null }) => {
  if (!item) return;

  return (
    <img
      src={item?.img}
      className="w-full h-full object-cover"
      style={{
        objectPosition: item.objectPosition || "center",
      }}
      alt={item.alt || ""}
    />
  );
};
