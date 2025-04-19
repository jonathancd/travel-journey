import ArrowIcon from "@/assets/icons/arrow-down.svg";
import { ScrollArrowsProps } from "../../types/scrollArrow";

export const ScrollArrow = ({ onClick } : ScrollArrowsProps) => {
    return (
        <div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
            onClick={onClick}
        >
            <img src={ArrowIcon} alt="Scroll down" className="w-8 h-8 animate-bounce"/>
        </div>
    );
}