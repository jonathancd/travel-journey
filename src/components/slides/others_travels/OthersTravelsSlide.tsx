import { useTranslation } from "react-i18next";
import { SlideLayout } from "../../../layouts/SlideLayout";
import { otherTravelsData } from "../../../data/otherTravelsData";

export const OthersTravelsSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideLayout title="Others Travels">
      <div className="relative mt-20 ml-[10%] h-[70vh] w-full">
        <div className="relative h-full w-full flex justify-center">
          <div className="w-[75vw] mt-6 pt-[40px] h-[calc(100%-40px)]">
            <div className="flex flex-wrap h-full w-full">
              {otherTravelsData.map((travel) => (
                <div
                  key={travel.i18n_key}
                  className="w-2/4 border border-[#dbdbdb] text-[#4d4d4d] relative z-0 hover:z-10 hover:scale-[1.03] hover:bg-white hover:shadow-[0_5px_12px_7px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out"
                >
                  <div className="flex h-full">
                    <div className="w-[65%] p-[35px]">
                      <h2 className="text-3xl text-black mb-2.5">
                        {t(`others_travels.${travel.i18n_key}.title`)}
                      </h2>
                      <p className="text-[#6d6d6d] mb-2.5">{travel.date}</p>
                      <p>
                        {t(`others_travels.${travel.i18n_key}.description`)}
                      </p>
                    </div>
                    <div
                      className="w-[35%] bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${travel.imgBackground}')`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
