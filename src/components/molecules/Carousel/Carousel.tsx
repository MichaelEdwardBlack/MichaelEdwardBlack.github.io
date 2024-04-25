export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
};
export const Carousel = ({ className, id, children }: CarouselProps) => {
  const activeSlide = document.querySelector(`#${id}>.slide.translate-x-0`);
  const nextSlide = activeSlide?.nextElementSibling;
  const previousSlide = activeSlide?.previousElementSibling;
  const hasNextSlide = nextSlide && nextSlide.classList.contains("slide");
  const hasPreviousSlide = previousSlide && previousSlide.classList.contains("slide");
  const baseClass = ["relative", "flex", "flex-row", "h-96", className].join(" ");
  const animationClass = "transition duration-500 ease-in-out hover:scale-150 transform -translate-y-1/2";

  const goToNextSlide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hasNextSlide) {
      activeSlide?.classList.remove("translate-x-0");
      activeSlide?.classList.add("-translate-x-full");
      nextSlide.classList.remove("translate-x-full");
      nextSlide.classList.add("translate-x-0");
    }
  };

  const goToPreviousSlide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hasPreviousSlide) {
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("translate-x-full");
      previousSlide.classList.remove("-translate-x-full");
      previousSlide.classList.add("translate-x-0");
    }
  };

  return (
    <div id={id} className={baseClass}>
      {children}

      {hasPreviousSlide && (
        <div
          className={`absolute left-0 lg:left-4 flex items-center justify-center w-8 h-8 cursor-pointer top-1/2 ${animationClass}`}
          onClick={goToPreviousSlide}
        >
          &#x276E;
        </div>
      )}

      {hasNextSlide && (
        <div
          className={`absolute right-0 lg:right-4 flex items-center justify-center w-8 h-8 cursor-pointer top-1/2 ${animationClass}`}
          onClick={goToNextSlide}
        >
          &#x276F;
        </div>
      )}
    </div>
  );
};

Carousel.defaultProps = {
  id: "carousel",
};
