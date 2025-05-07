import { CountryCardProps } from "../../../types/Country";
import { CountryOverlay } from "./CountryOverlay";
import { CountryPending, CountryVisited } from "../../../types/Country";

export const CountryCard = ({ type, country }: CountryCardProps) => {
  const overlayProps =
    type === "visited"
      ? { type, country: country as CountryVisited }
      : { type, country: country as CountryPending };

  return (
    <div className="w-2/4 xs:w-4/4 md:w-1/4 xl:w-1/6 p-2">
      <div
        className="w-full aspect-[4/3] bg-contain bg-center bg-no-repeat border-2 border-gray-100 relative group rounded overflow-hidden"
        style={{ backgroundImage: `url('${country.flagImg}')` }}
      >
        <CountryOverlay {...overlayProps} />
      </div>
    </div>
  );
};
