import { useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const xOffset = 200;
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

export interface CarouselProps {
  id?: string;
  currentPage: number;
  onChange: (page: number, direction: number) => void;
  direction: number;
  pages: React.ReactNode[];
}
export const Carousel = ({
  currentPage,
  direction,
  onChange,
  pages,
  ...props
}: CarouselProps) => {
  /* Add and remove pages from the array to checkout
     how the gestures and pagination animations are
     fully data and layout-driven. */
  const hasPaginated = useRef(false);

  function detectPaginationGesture(
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (info.offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (info.offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      // Wrap the page index to within the
      // permitted page range
      newPage = (newPage + pages.length) % pages.length;
      onChange(newPage, info.offset.x < 0 ? 1 : -1);
    }
  }

  return (
    <div {...props} className="relative w-full h-full min-h-[250px]">
      <AnimatePresence
        // This will be used for components to resolve
        // exit variants. It's necessary as removed
        // components won't rerender with
        // the latest state (as they've been removed)
        custom={direction}
      >
        <motion.div
          key={currentPage}
          data-page={currentPage}
          variants={variants}
          className="absolute inset-0 flex items-center justify-center cursor-grab"
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
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
