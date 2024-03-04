import { AnimatePresence, motion, wrap } from "framer-motion";
import { Blur } from "transitions-kit";
import { AsyncImage } from "loadable-image";
import { useRef } from "react";

export const images = [
  {
    src: "../Home/Slider/casal_com_bebe.jpg",
    title: "Plano de saúde individual",
    subtitle: "Adoro todas as versões que fizeram de mim quem sou hoje.",
  },
  {
    src: "../Home/Slider/familia.jpg",
    title: "Planos de saúde familiar",
    subtitle:
      "Uma família unida e feliz é uma dádiva que dá trabalho, mas ainda assim, é um presente que sempre compensará",
  },
  {
    src: "../Home/Slider/empresa.jpg",
    title: "Plano de saúde empresarial",
    subtitle:
      "“Quando algo é importante o suficiente, você realiza mesmo que as chances não estejam a seu favor.” Elon Musk ",
  },
  {
    src: "../Home/Slider/avos_com_netos.jpg",
    title: "Planos de saúde sênior, direcionado para a melhor idade",
    subtitle:
      '"No final, não são os anos da sua vida que contam, e sim a vida ao longo desses anos” – Abraham Lincoln, 16º. presidente dos EUA',
  },
];

// Variants in framer-motion define visual states
// that a rendered motion component can be in at
// any given time.

const xOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

type CarouselFrame = {
  currentPage: number;
  setPage: Function;
  direction: number;
};
export const CarouselFrame: React.FC<CarouselFrame> = ({
  currentPage,
  setPage,
  direction,
}) => {
  /* Add and remove images from the array to checkout
     how the gestures and pagination animations are
     fully data and layout-driven. */
  const hasPaginated = useRef(false);

  function detectPaginationGesture(_e: Event, { offset }: { offset: any }) {
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      // Wrap the page index to within the
      // permitted page range
      newPage = wrap(0, images.length, newPage);
      setPage(newPage, offset.x < 0 ? 1 : -1);
    }
  }

  return (
    <div className="relative h-[610px] w-full overflow-x-clip">
      <AnimatePresence
        // This will be used for components to resolve
        // exit variants. It's necessary as removed
        // components won't rerender with
        // the latest state (as they've been removed)
        custom={direction}
      >
        <motion.div
          className="absolute w-full h-full"
          key={currentPage}
          data-page={currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          // Snap the component back to the center
          // if it hasn't paginated
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all
          // other variants, in this case initial and animate.
          custom={direction}
        >
          <AsyncImage
            className="object-cover lg:h-[660px] lg:w-full"
            src={images[currentPage].src}
            Transition={(props) => <Blur radius={10} {...props} />}
            loader={<div className="bg-base-tertiary" />}
          />

          <div className="absolute bottom-10 right-0 px-6 py-4 bg-base-secondary  w-1/2 opacity-80 drop-shadow-lg rounded-s">
            <h2 className="mb-3 text-xl font-belleza font-semibold tracking-tight text-black">
              {images[currentPage].title}
            </h2>
            <p className="leading-normal font-belleza text-black text-base">
              {images[currentPage].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
