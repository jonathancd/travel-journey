export interface PaginationButtonProps {
    index: number,
    selectedIndex: number,
    onClick: (index: number) => void
}

export interface PaginationArrowProps {
    isDisabled: boolean,
    rotateImage: boolean,
    arrowAlt: string,
    onClick: () => void
}
