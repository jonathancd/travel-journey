import { MobileSliderTabsProps } from "../../../types/MobileSlider";

export const MobileSliderTabs = ({
  selectedTabIndex,
  setSelectedTabIndex,
  setSelectedItemIndex,
  tabs,
}: MobileSliderTabsProps) => {
  return (
    <div className="h-[8vh] overflow-x-auto flex gap-2 px-4 mt-2 pb-2 justify-start items-center">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          onClick={() => {
            setSelectedTabIndex(i);
            setSelectedItemIndex(0);
          }}
          className={`h-[28px] px-3 py-1 rounded-full text-sm whitespace-nowrap ${
            i === selectedTabIndex
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
