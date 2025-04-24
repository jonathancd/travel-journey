import { SlideLayout } from "../../../layouts/SlideLayout";
import { useTranslation } from "react-i18next";

export const EgyptSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideLayout title="Lost in time whie in Egypt">
      <p>Egypt</p>
    </SlideLayout>
  );
};
