import { useTranslation } from 'react-i18next';
import { JapanCityProps } from "../../../types/JapanCityProps";

export const JapanCity = ({index, city, totalCities}: JapanCityProps) => {
    const { t } = useTranslation();

    return (
        <div className="w-[50%]">
            <p>Japan  {index + 1} / {totalCities}</p>
            <h2 className="text-7xl">{t(`japanCities.${city.name.toLocaleLowerCase()}.title`)}</h2>
            <p className="w-[70%] text-sm whitespace-normal font-light mt-[20px]"> <strong>{t(`japanCities.${city.name.toLocaleLowerCase()}.description`)}</strong> </p>
        </div>
    );
}