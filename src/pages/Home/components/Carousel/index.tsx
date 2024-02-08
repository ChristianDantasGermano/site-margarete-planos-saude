import { LayoutGroup, motion } from "framer-motion";
import { MouseEventHandler, useEffect, useState } from "react";
import { CarouselFrame, images } from "./components/carouselFrame";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const DirectionsArrow = ({
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
    <LayoutGroup id="b">
      <div className="absolute mt-72 w-full h-auto">
        <div className="flex max-w-full h-auto">
          <div className="z-10 w-full h-auto">
            <DirectionController currentPage={currentPage} setPage={setPage} />
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

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
    <LayoutGroup id="b">
      <div className="flex justify-center items-center ">
        <div className="z-10 bg-base-tertiary bg-opacity-60 flex justify-center items-center rounded-full shadow-lg">
          {images.map((image, index) => (
            <Indicator
              key={index}
              onClick={() => setPage(index)}
              isSelected={index === currentPage}
            />
          ))}
        </div>
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
    <div className="p-4 cursor-pointer" onClick={onClick}>
      <div className="relative w-2 h-2 bg-base-base  rounded-full ">
        {isSelected && (
          // By setting layoutId, when this component
          // is removed and a new one is added elsewhere,
          // the new component will animate out from the old one.
          <motion.div
            className="z-10 absolute -top-2 bg-base-primary rounded-full w-2 h-1"
            layoutId="highlight"
          />
        )}
      </div>
    </div>
  );
};

const DirectionController = ({
  currentPage,
  setPage,
}: {
  currentPage: number;
  setPage: Function;
}) => {
  return (
    <div className="flex w-full h-auto p-4">
      <div className="flex-1 justify-center items-center">
        <motion.div
          className="flex justify-center items-center bg-base-tertiary bg-opacity-60 w-10 h-10 rounded-full shadow-xl cursor-pointer"
          onClick={() => backSlider(currentPage, setPage)}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <MdOutlineArrowBackIosNew color="white" />
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center items-center bg-base-tertiary bg-opacity-60 w-10 h-10 rounded-full shadow-xl cursor-pointer"
        onClick={() => forwardSlider(currentPage, setPage)}
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <MdOutlineArrowForwardIos color="white" />
      </motion.div>
    </div>
  );
};

const forwardSlider = (currentPage: number, setPage: Function) => {
  if (currentPage >= images.length - 1) {
    setPage(0, 1);
  } else {
    setPage(currentPage + 1);
  }
};

const backSlider = (currentPage: number, setPage: Function) => {
  if (currentPage === 0) {
    setPage(images.length - 1, 1);
  } else {
    setPage(currentPage - 1);
  }
};

export default function Carousel() {
  /* We keep track of the pagination direction as well as
   * current page, this way we can dynamically generate different
   * animations depending on the direction of travel */

  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  function setPage(newPage: number, newDirection: number) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  useEffect(() => {
    if (images.length) {
      const timeoutId = setTimeout(() => {
        forwardSlider(currentPage, setPage);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
    return () => {};
  }, [currentPage]);

  return (
    <div className="-z-10">
      <DirectionsArrow currentPage={currentPage} setPage={setPage} />
      <CarouselFrame
        currentPage={currentPage}
        direction={direction}
        setPage={setPage}
      />
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
}
