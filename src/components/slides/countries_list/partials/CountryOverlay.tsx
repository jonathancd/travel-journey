import { useTranslation } from "react-i18next";
import { OverlayTag } from "./OverlayTag";
import { CountryCardProps } from "../../../../types/Country";

export const CountryOverlay = ({ type, country }: CountryCardProps) => {
  const { t } = useTranslation();
  const { code } = country;

  return (
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between text-white p-3">
      <OverlayTag
        type={type}
        countryCode={country.code}
        tag={country.details.tag}
      />

      <div className="text-center mt-auto mb-auto">
        <h3 className="text-xs md:text-sm font-bold">
          {t(`countries.${type}.${code}.name`)}
        </h3>
        {type === "visited" && (
          <p className="text-xs mt-1">
            {t(`countries.${type}.${code}.short_summary`)}
          </p>
        )}
      </div>
      {/* <div className="text-center mt-3">
        <button
          className="text-xs underline underline-offset-2 hover:text-yellow-300 cursor-pointer"
          onClick={() => {
            console.log("View details of:", code);
          }}
        >
          {t("utilities.view_details")}
        </button>
      </div> */}
    </div>
  );
};
