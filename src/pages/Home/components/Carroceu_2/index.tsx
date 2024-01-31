import { LayoutGroup, motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";
import { CarouselFrame, pages } from "./components/carouselFrame";

const Pagination = ({
  currentPage,
  setPage,
}: {
  currentPage: number;
  setPage: Function;
}) => {
  // Wrap all the pagination Indicators
  // with AnimateSharedPresence
  // so we can detect when Indicators
  // with a layoutId are removed/added
  return (
    <LayoutGroup id="a">
      <div className="flex justify-center items-center mt-0">
        {pages.map((page) => (
          <Indicator
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};

const Indicator = ({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <div className="p-5 cursor-pointer" onClick={onClick}>
      <div className="relative w-3 h-3 bg-base-tertiary rounded-full ">
        {isSelected && (
          // By setting layoutId, when this component
          // is removed and a new one is added elsewhere,
          // the new component will animate out from the old one.
          <motion.div
            className="z-10 absolute -top-2 bg-base-secondary rounded-full w-3 h-1"
            layoutId="highlight"
          />
        )}
      </div>
    </div>
  );
};

export default function Carroceu() {
  /* We keep track of the pagination direction as well as
   * current page, this way we can dynamically generate different
   * animations depending on the direction of travel */
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  function setPage(newPage: number, newDirection: number) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  return (
    <div className="z-0">
      <CarouselFrame
        currentPage={currentPage}
        direction={direction}
        setPage={setPage}
      />
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
}
