export interface PaginationButtonProps {
  index: number;
  selectedIndex: number;
  onClick: (index: number) => void;
}

export interface PaginationArrowProps {
  isDisabled: boolean;
  rotateImage: boolean;
  arrowAlt: string;
  onClick: () => void;
}

export interface SlidePaginationProps {
  currentIndex: number;
  totalItems: number;
  onChange: (newIndex: number) => void;
}
