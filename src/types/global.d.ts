// src/types/global.d.ts
export { };

declare global {
  interface Window {
    fullpage_api: {
      moveSectionDown: () => void;
      moveTo: (anchor: string | number, slideIndex?: number) => void;
      moveSectionUp: () => void;
      // puedes agregar más si usas otras funciones de fullPage.js
    };
  }
}
