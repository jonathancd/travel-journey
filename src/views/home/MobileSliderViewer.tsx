import { useEffect, useRef, useState } from "react";
import { TabImg } from "../../components/utils/TabImg";
import { useTranslation } from "react-i18next";
import { ModalSliderViewerProps } from "../../types/MobileSlider";

import { MobileSliderPagination } from "./partials/MobileSliderPagination";
import { MobileSliderItemTitle } from "./partials/MobileSliderItemTitle";
import { MobileSliderTabs } from "./partials/MobileSliderTabs";

export const MobileSlideViewer = ({
  index,
  tabs,
  title,
  i18nPrefix,
}: ModalSliderViewerProps) => {
  const { t } = useTranslation();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTab = tabs[selectedTabIndex];
  const currentItem = currentTab?.items?.[selectedItemIndex] || null;

  useEffect(() => {
    if (showMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMore]);

  const handleTouchStart = useRef(0);
  const handleTouchEnd = useRef(0);

  if (!currentItem || !currentTab) return null;

  const prefix = i18nPrefix ? i18nPrefix + "." : "";

  const titleKey = `${prefix}${currentTab.code.toLowerCase()}.items.${
    currentItem.code
  }.title`;

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    const delta = handleTouchStart.current - handleTouchEnd.current;

    if (delta > 50 && selectedItemIndex < currentTab.items.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else if (delta < -50 && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div
        className={`${
          tabs?.length > 1 ? "h-[70vh]" : " h-[78vh]"
        } relative w-full`}
        ref={scrollRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <TabImg item={currentItem} />

        {index !== 1 && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {currentTab.name} {currentItem.id}/{currentTab.items.length}
          </div>
        )}

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <h2 className="text-white text-lg font-semibold">{t(titleKey)}</h2>
          <p className="text-white text-sm line-clamp-2">
            {!currentItem?.hasSimpleDescription
              ? t(
                  `${prefix}${currentTab.code.toLowerCase()}.items.${
                    currentItem.code
                  }.description`
                )
              : t(
                  `${prefix}${currentTab.code.toLowerCase()}.items.${
                    currentItem.code
                  }.description_first`
                )}
          </p>
          <button
            onClick={() => setShowMore(true)}
            className="text-white underline text-sm mt-1"
          >
            {t("utilities.view_more")}
          </button>
        </div>
      </div>

      {currentTab.items.length > 1 && (
        <MobileSliderPagination
          items={currentTab.items}
          selectedItemIndex={selectedItemIndex}
          onClick={setSelectedItemIndex}
        />
      )}

      <MobileSliderItemTitle title={title} />

      {tabs.length > 1 && (
        <MobileSliderTabs
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
          setSelectedItemIndex={setSelectedItemIndex}
          tabs={tabs}
        />
      )}

      {/* Modal View More */}
      {showMore && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="relative bg-white w-full max-h-[99%] rounded-t-xl p-4 overflow-y-auto">
            <button
              className="mb-2 absolute top-2 right-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded-full"
              onClick={() => setShowMore(false)}
            >
              Cerrar
            </button>
            {!currentItem?.hasSimpleDescription ? (
              <p className="text-sm whitespace-pre-line pt-5">
                {t(
                  `${prefix}${currentTab.code.toLowerCase()}.items.${
                    currentItem.code
                  }.description`
                )}
              </p>
            ) : (
              <p className="text-sm whitespace-pre-line pt-5">
                {t(
                  `${prefix}${currentTab.code.toLowerCase()}.items.${
                    currentItem.code
                  }.description_first`
                )}
                {t(
                  `${prefix}${currentTab.code.toLowerCase()}.items.${
                    currentItem.code
                  }.description_second`
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
