import { PageTitle } from "../../../types/MobileSlider";

export const MobileSliderItemTitle = ({ title }: PageTitle) => (
  <div className="h-[5vh] px-4">
    <h3 className="text-center text-2xl font-bold">{title}</h3>
  </div>
);
