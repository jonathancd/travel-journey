export const getBaseUrl = (path: string) => {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(
    /^\/+/,
    ""
  )}`;
};
