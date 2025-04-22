import { PaginationArrow } from "../pagination/PaginationArrow";
import { PaginationButton } from "../pagination/PaginationButton";
import { SlidePaginationProps } from "../../types/Pagination";

export const SlidePagination = ({
  currentIndex,
  totalItems,
  onChange,
}: SlidePaginationProps) => {
  const goNext = () => {
    onChange((currentIndex + 1) % totalItems);
  };

  const goPrev = () => {
    onChange((currentIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="absolute bottom-0 left-0 flex items-center">
      <div className="flex gap-2 mr-5">
        <PaginationArrow
          onClick={goPrev}
          isDisabled={currentIndex === 0}
          rotateImage={true}
          arrowAlt="Previous"
        />
        <PaginationArrow
          onClick={goNext}
          isDisabled={currentIndex === totalItems - 1}
          rotateImage={false}
          arrowAlt="Next"
        />
      </div>
      <div className="flex gap-2 ml-4">
        {Array.from({ length: totalItems }).map((_, i) => (
          <PaginationButton
            key={i}
            index={i}
            selectedIndex={currentIndex}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  );
};
