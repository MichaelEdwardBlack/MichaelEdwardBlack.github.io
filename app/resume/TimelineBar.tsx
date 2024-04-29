import { CalendarDaysIcon } from "@heroicons/react/24/solid";

interface TimelineBarProps {
  startYear: string;
  endYear: string;
  span: number;
}
export const TimelineBar = ({ startYear, endYear, span }: TimelineBarProps) => {
  const renderTimeline = () => {
    let elements = [];
    for (let i = 1; i < span; i++) {
      elements.push(
        <div
          key={"timeline-" + i}
          className="relative h-56 ml-3 border-r border-black first:border-t last:border-b dark:border-white"
        >
          {i === 1 && (
            <>
              <CalendarDaysIcon
                height={24}
                width={24}
                className="absolute transition-transform duration-300 ease-in delay-100 group-hover:rotate-90 -top-3 -right-3 bg-white dark:bg-black"
              />
              <h5 className="absolute transition-all text-transparent group-hover:text-current duration-200 ease-in-out delay-200 group-hover:z-0 -z-50 -left-3 -top-6 bg-white dark:bg-black">
                {endYear}
              </h5>
            </>
          )}
          {i === span - 1 && (
            <>
              <CalendarDaysIcon
                height={24}
                width={24}
                className="absolute transition-transform duration-300 ease-in delay-100group-hover:rotate-90 -bottom-3 -right-3 bg-white dark:bg-black"
              />
              <h5 className="absolute transition-all text-transparent group-hover:text-current duration-200 ease-in-out delay-200 group-hover:z-0 -z-50 -left-3 -bottom-6 bg-white dark:bg-black">
                {startYear}
              </h5>
            </>
          )}
        </div>
      );
    }
    return elements;
  };
  return (
    <div
      className="flex flex-col w-5 pr-6 transition-all duration-300 ease-in delay-100 cursor-default pt-28 md:pr-8 hover:w-24 group"
      style={{ writingMode: "vertical-lr" }}
    >
      <div className="flex w-full">{renderTimeline()}</div>
    </div>
  );
};