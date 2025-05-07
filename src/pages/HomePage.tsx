import { useIsMobile } from "../hooks/useIsMobile";
import { HomePageMobile } from "../views/home/HomePageMobile";
import { HomePageDesktop } from "../views/home/HomePageDesktop";

export const HomePage = () => {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return isMobile ? <HomePageMobile /> : <HomePageDesktop />;
};
