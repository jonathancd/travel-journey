import { motion, AnimatePresence } from "framer-motion";
import { Item } from "../../types/Tabs";
import { getBaseUrl } from "../../utils/path";

export const TabImg = ({ item }: { item: Item | null }) => {
  if (!item) return;

  const horizontal = item.objectPositionHorizontal || "center";
  const vertical = item.objectPosition || "center";
  const finalPosition = `${horizontal} ${vertical}`;

  return (
    <div className="w-full h-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={item.img}
          src={getBaseUrl(item.img)}
          className="w-full h-full object-cover absolute top-0 left-0"
          alt={item.alt || ""}
          style={{
            objectPosition: finalPosition,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      </AnimatePresence>
    </div>
  );
};
