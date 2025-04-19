import ArrowRight from "../../assets/icons/arrow-right.svg";
import { PaginationArrowProps } from "../../types/PaginationArrowProps";

export const PaginationArrow = ({isDisabled, rotateImage, arrowAlt, onClick} : PaginationArrowProps) => (
     <button
        onClick={onClick}
        className="px-2 py-1 border border-red-600 h-[48px] w-[48px] text-center cursor-pointer"
        >
        <img src={ArrowRight} alt={arrowAlt} className={`inline ${rotateImage ? 'rotate-180' : ''}`}/>
    </button>
)