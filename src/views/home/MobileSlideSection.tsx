import { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";
import { MobileSlideViewer } from "./MobileSliderViewer";
import { MobileSlideSectionProps } from "../../types/MobileSlider";
import { trackEvent } from "../../utils/analytics";

export const MobileSlideSection = ({
  slide,
}: {
  slide: MobileSlideSectionProps;
}) => {
  const { ref, isInView } = useInView();
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    if (isInView && !hasTracked) {
      trackEvent(
        `Mobile Slide ${slide.index}`,
        "Mobile Navigation",
        slide.title
      );
      setHasTracked(true);
    }
  }, [hasTracked, isInView, slide]);

  return (
    <div ref={ref} className={`min-h-[calc(100vh-60px)]`}>
      {isInView && (
        <MobileSlideViewer
          index={slide.index}
          tabs={slide.tabs}
          title={slide.title}
          i18nPrefix={slide.i18nPrefix}
        />
      )}
    </div>
  );
};
