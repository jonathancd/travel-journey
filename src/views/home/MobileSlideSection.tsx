import { useInView } from "../../hooks/useInView";
import { MobileSlideViewer } from "./MobileSliderViewer";
import { MobileSlideSectionProps } from "../../types/MobileSlider";

export const MobileSlideSection = ({
  slide,
}: {
  slide: MobileSlideSectionProps;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`min-h-[calc(100vh-60px)]`}>
      {isInView && (
        <MobileSlideViewer
          tabs={slide.tabs}
          title={slide.title}
          i18nPrefix={slide.i18nPrefix}
        />
      )}
    </div>
  );
};
