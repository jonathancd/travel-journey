import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
};

export const trackPage = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  ReactGA.event({ action, category, label });
};
