import { useTranslation } from "react-i18next";
import { SlideLayout } from "../../../layouts/SlideLayout";
import DubaiWallpaper from "/dubai_wallpaper.png";

export const HomeSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideLayout title={t("pages.home_title")}>
      <div className="hero w-full ml-[10%] relative flex flex-row justify-end items-center">
        <div className="content absolute left-0 flex flex-col justify-start w-[70%]">
          <h1 className="text-6xl text-left">Jonathan Cuotto</h1>
          <p className="inline-block w-[40%] text-sm">
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
