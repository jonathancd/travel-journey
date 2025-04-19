import { useTranslation } from 'react-i18next';
import { Link, Outlet } from "react-router-dom";
import { LangButton } from '../components/utils/LangButton';

export const MainLayout = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
   i18n.changeLanguage(lang);
   localStorage.setItem('i18nextLng', lang); // opcional: aseguramos persistencia
  };

  const languages = ['en', 'es'];

  return (
    <div className="h-screen overflow-hidden relative">
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow flex items-center justify-between py-4 px-16">
            <Link to="/" className="text-xl font-bold text-gray-800">
                Travel Journey
            </Link>
            <div className="space-x-2">
              { languages.map((lang) => (
                <LangButton key={lang} lang={lang} currentLang={currentLang} onClick={changeLanguage}/>
              ))}
            </div>
        </nav>
        <div>
          <Outlet />
        </div>
        <footer className="fixed bottom-0 w-full px-16">
          <div>
            <Link to="/">Instagram</Link>
          </div>
        </footer>
    </div>
  );
};
