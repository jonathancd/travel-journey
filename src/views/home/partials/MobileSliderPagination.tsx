import { MobileSliderPaginationType } from "../../../types/MobileSlider";

export const MobileSliderPagination = ({
  items,
  selectedItemIndex,
  onClick,
}: MobileSliderPaginationType) => {
  return (
    <div className="h-[5vh] flex justify-center items-center gap-1 mt-2">
      {items.map((_, idx) => (
        <span
          key={idx}
          onClick={() => onClick(idx)}
          className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${
            idx === selectedItemIndex ? "bg-black scale-110" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
  );
};
