
import { PageTitle } from "../components/utils/PageTitle";
import { SlideLayoutProps } from "../types/SlideLayoutProps";

export const SlideLayout = ({title, children}: SlideLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-row">
             {/* justify-end */}
            <PageTitle name={title} />
            {children}
        </div>
    );
}