import { useTranslation } from "react-i18next";
import { OverlayTagProps } from "../../../types/Country";

export const OverlayTag = ({ countryCode, tag, type }: OverlayTagProps) => {
  const { t } = useTranslation();

  if (!tag?.show) return null;

  const label = tag.isCustomized
    ? t(`countries.${type}.${countryCode}.tag.label`)
    : type === "visited"
    ? t("countries.top_place")
    : t("countries.must_visit");

  const icons = tag.isCustomized ? tag.icons : [];

  return (
    <div className="flex absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded shadow items-center gap-1">
      {icons.map((icon, idx) => (
        <span key={idx}>{icon}</span>
      ))}
      <span>{label}</span>
    </div>
  );
};
