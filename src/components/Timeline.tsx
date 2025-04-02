import React from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const TimelineItemDesktop: React.FC<{ item: TimelineItem; index: number }> = ({
  item,
  index,
}) => {
  const isLeft = index % 2 === 0;
  if (isLeft) {
    // -------- left side --------
    return (
      <div
        className={`md:flex hidden w-full md:flex-row md:items-center mb-12 relative z-10`}
      >
        <div className="w-full md:w-1/2 flex justify-end gap-5 pr-6 relative">
          {/* -------- blue horizontal line -------- */}
          <div className="absolute top-4 right-0 h-1 w-16 rounded-l-[4.125rem] bg-primary-blue z-0" />
          {/* -------- card -------- */}
          <div className="relative p-4 pr-12 pt-0 text-right max-w-[33rem]">
            {/* font-bold text-2xl flex items-start justify-end w-full */}
            <h3 className="font-medium text-2xl flex items-start justify-end w-full">
              {item.icon && (
                <span className="text-primary-blue">{item.icon}</span>
              )}
              {item.title}
            </h3>
            <p className="text-base text-text-blue opacity-60 mt-2">
              {item.subtitle}
            </p>
            <p className="text-base text-text-blue mt-2">{item.description}</p>
          </div>
        </div>
        <div className="hidden md:block w-0 md:w-1/2"></div>
      </div>
    );
  } else {
    // -------- right side --------
    return (
      <div className="md:flex hidden w-full md:flex-row md:items-center mb-12 relative z-10">
        <div className="hidden md:block w-0 md:w-1/2"></div>
        <div className="w-full md:w-1/2 flex md:pl-6 text-left relative gap-5">
          {/* -------- blue horizontal line -------- */}
          <div className="absolute top-4 left-0 h-1 w-16 rounded-r-[4.125rem] bg-primary-blue z-0" />
          
          {/* -------- card --------  */}
          <div className="relative p-4 pl-12 pt-0 text-left max-w-[33rem]">
            <h3 className="font-medium text-2xl">
              {item.title}
              {item.icon && (
                <span className="text-primary-blue">{item.icon}</span>
              )}
            </h3>
            <p className="text-base text-text-blue opacity-60 mt-2">
              {item.subtitle}
            </p>
            <p className="text-base text-text-blue mt-2">{item.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

const TimelineItemMobile: React.FC<{ item: TimelineItem }> = ({ item }) => {
  return (
    <div className="block md:hidden relative pl-10 mb-10">
      {/* -------- blue horizontal line --------  */}
      <div className="absolute left-4 top-3 w-6 h-1 rounded-r-[4.125rem] bg-primary-blue z-10" />

      {/* -------- card --------  */}
      <div className=" p-4 pt-0 rounded-md bg-white relative z-10">
        <h3 className="font-medium inline-flex items-center text-xl">
          {item.icon && <span className="text-blue-500 mr-2">{item.icon}</span>}
          {item.title}
        </h3>
        <p className="text-base text-text-blue opacity-60 mt-2">
          {item.subtitle}
        </p>
        <p className="text-base text-text-blue mt-2">{item.description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
  return (
    <>
      {/* -------- section title -------- */}
      <div className="relative flex md:justify-center mb-8">
        <h2 className="bg-primary-blue text-white px-4 py-2 rounded font-bold text-lg">
          {title}
        </h2>
      </div>

      {/* -------- timeline items --------- */}
      {items.map((item, index) => (
        <div key={index} className="relative z-10">
          <TimelineItemMobile item={item} />
          <TimelineItemDesktop item={item} index={index} />
        </div>
      ))}
    </>
  );
};

export default Timeline;
