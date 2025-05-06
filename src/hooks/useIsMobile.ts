import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 500) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < breakpoint);
  }, [breakpoint]);

  return isMobile;
};
