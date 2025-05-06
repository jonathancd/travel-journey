import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { LangButton } from "../components/utils/LangButton";

import { useIsMobile } from "../hooks/useIsMobile";

export const MainLayout = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isMobile = useIsMobile();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // asegurar persistencia
  };

  const languages = ["en", "es"];

  return (
    <div
      className={`w-full relative ${
        isMobile ? "min-h-screen overflow-auto" : "h-screen overflow-hidden"
      }`}
    >
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Travel Journey
          </Link>
          <div className="space-x-2">
            {languages.map((lang) => (
              <LangButton
                key={lang}
                lang={lang}
                currentLang={currentLang}
                onClick={changeLanguage}
              />
            ))}
          </div>
        </div>
      </nav>
      <div className="w-full">
        <Outlet />
      </div>
      <footer className={` w-full ${!isMobile ? "fixed bottom-6" : "mb-6"}`}>
        <div className="max-w-screen-2xl mx-auto flex gap-4 px-4">
          <Link to="https://www.instagram.com/jonathancuotto/" target="_blank">
            Instagram
          </Link>
          <Link
            to="https://www.linkedin.com/in/jonathan-cuotto/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
};
