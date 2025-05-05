import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { TabContentProps } from "../../types/Tabs";

export const TabContent = ({ i18nPrefix, tab, item }: TabContentProps) => {
  const { t } = useTranslation();

  if (!tab || !item) {
    return;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.img}
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <p>
          {tab.name} {item.id}/{tab.items.length}
        </p>
        <h2 className="text-6xl">
          {t(
            `${
              i18nPrefix ? i18nPrefix + "." : ""
            }${tab.code.toLocaleLowerCase()}.items.${item.code}.title`
          )}
        </h2>
        <p className="text-sm whitespace-break-spaces font-light mt-[20px]">
          <strong>
            {t(
              `${
                i18nPrefix ? i18nPrefix + "." : ""
              }${tab.code.toLocaleLowerCase()}.items.${item.code}.description`
            )}
          </strong>
        </p>
      </motion.div>
    </AnimatePresence>
  );
};
