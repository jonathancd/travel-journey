import { PageTitle } from "../components/utils/PageTitle";
import { SlideLayoutProps } from "../types/SlideLayoutProps";

export const SlideLayout = ({ title, children }: SlideLayoutProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-row overflow-hidden">
      <div
        className="
            relative
            max-w-screen-2xl 
            mx-auto
            px-4 
            pl-20 
            min-[1700px]:pl-4 
            w-full
          "
      >
        <PageTitle name={title} />
        {children}
      </div>
    </div>
  );
};
