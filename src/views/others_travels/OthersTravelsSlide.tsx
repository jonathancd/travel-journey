import { useTranslation } from "react-i18next";
import { SlideLayout } from "../../layouts/SlideLayout";
import { otherTravelsData } from "../../data/otherTravelsData";

const OthersTravelsSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideLayout title="Others Travels">
      <div className="relative w-full max-h-[80vh] min-h-[400px] flex flex-col h-[calc(80vh-40px)]">
        <div className="relative w-full flex-1 pt-4 overflow-y-auto h-full">
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-wrap h-full w-full mb-15">
              {otherTravelsData.map((travel) => (
                <div
                  key={travel.i18n_key}
                  className="w-2/4 border border-[#dbdbdb] text-[#4d4d4d] relative z-0 hover:z-10 hover:scale-[1.03] hover:bg-white hover:shadow-[0_5px_12px_7px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out"
                >
                  <div className="flex h-full">
                    <div className="w-[65%] p-[25px]">
                      <h2 className="text-2xl text-black mb-2.5">
                        {t(`others_travels.${travel.i18n_key}.title`)}
                      </h2>
                      <p className="text-[#6d6d6d] mb-2.5">{travel.date}</p>
                      <p className="text-sm">
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

export default OthersTravelsSlide;
