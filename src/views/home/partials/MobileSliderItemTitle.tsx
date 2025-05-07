import { PageTitle } from "../../../types/MobileSlider";

export const MobileSliderItemTitle = ({ title }: PageTitle) => (
  <div className="h-[5vh] px-4">
    <h3 className="text-lg font-bold">{title}</h3>
  </div>
);
