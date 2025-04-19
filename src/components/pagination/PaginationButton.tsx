import { PaginationButtonProps } from "../../types/Pagination"

export const PaginationButton = ({index, selectedIndex, onClick}:PaginationButtonProps)  => (
    <button
        onClick={() => onClick(index)}
        className={`w-8 h-8 rounded-full text-sm cursor-pointer ${
        selectedIndex === index
            ? "bg-black text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
    >
        {index + 1}
    </button>
)