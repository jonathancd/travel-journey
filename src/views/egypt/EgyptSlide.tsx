import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { SlideTabsLayout } from "../../layouts/SlideTabsLayout";
import { EgyptData as tabs } from "../../data/egyptData";
import { TabImg } from "../../components/utils/TabImg";

export const EgyptSlide = () => {
  const { t } = useTranslation();

  return (
    <SlideTabsLayout
      pageTitle={t("pages.egypt_title")}
      tabs={tabs}
      showTabs={false}
    >
      {({ currentTab, currentItem }) => (
        <div className="flex flex-row h-full w-full">
          <div className="w-[60%] lg:w-[35%] 3xl:w-[30%] h-full pr-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem?.img}
                className="w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p>
                  {currentTab?.name} {currentItem?.id}/
                  {currentTab?.items.length}
                </p>
                <h2 className="text-2xl lg:text-3xl 2xl:text-6xl">
                  {t(
                    `${currentTab?.code.toLocaleLowerCase()}.items.${
                      currentItem?.code
                    }.title`
                  )}
                </h2>
                <p className="text-xs lg:text-sm  whitespace-break-spaces font-light mt-[20px]">
                  <strong>
                    {t(
                      `${currentTab?.code.toLocaleLowerCase()}.items.${
                        currentItem?.code
                      }.description_first`
                    )}
                  </strong>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-[40%] lg:w-[30%] 3xl:w-[40%] h-full">
            <TabImg item={currentItem} />
          </div>
          <div className="hidden lg:flex lg:w-[35%] 3xl:w-[30%] h-full items-end pl-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem?.img}
                className="w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs lg:text-sm  whitespace-normal font-light mt-[20px]">
                  <strong>
                    {t(
                      `${currentTab?.code.toLocaleLowerCase()}.items.${
                        currentItem?.code
                      }.description_second`
                    )}
                  </strong>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </SlideTabsLayout>
  );
};
