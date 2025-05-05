import { useTranslation } from "react-i18next";
import { SlideLayout } from "../../../layouts/SlideLayout";
import DubaiWallpaper from "/hero.jpg";

export const HomeSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideLayout title={t("pages.home_title")}>
      <div className="hero relative w-full max-h-[80vh] min-h-[400px] flex flex-row h-[calc(80vh-40px)] justify-end items-center overflow-hidden">
        <div className="content absolute left-0 flex flex-col justify-start w-[70%]">
          <h1 className="text-6xl text-left">Jonathan Cuotto</h1>
          <p className="inline-block w-[40%] text-sm text-justify whitespace-break-spaces">
            {t("hero.description")}
          </p>
        </div>
        <div className="hero-img w-[70%]">
          <img src={DubaiWallpaper} alt="Wallpaper" />
        </div>
      </div>
    </SlideLayout>
  );
};
