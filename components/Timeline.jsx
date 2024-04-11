  import { FaCalendarAlt } from "react-icons/fa";

  function Root({ children }) {
    return <ul className="flex flex-col self-end xl:self-start">{children}</ul>;
  }

  function Item({ children }) {
    return (
      <div className="grid grid-cols-[1fr_15px] grid-rows-1 items-center gap-x-2 w-full">
        {children}
      </div>
    );
  }

  function Point() {
    return (
      <div className="h-full !w-[2px] bg-neutral-300 dark:bg-neutral-600 relative ms-4">
        <div className="w-6 h-6 top-[21px] absolute right-[-11px] rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center">
          <FaCalendarAlt className="text-neutral-500 dark:text-neutral-100 w-3.5 h-3.5" />
        </div>
      </div>
    );
  }

  function Content({ children }) {
    return (
      <div className="flex flex-col items-end justify-center py-6">
        {children}
      </div>
    );
  }

  function Date({ children }) {
    return (
      <span className="text-neutral-600 dark:text-neutral-400 font-semibold text-sm xl:text-md max-w-80 text-end">
        {children}
      </span>
    );
  }

  function Title({ children }) {
    return (
      <h2 className="text-neutral-800 dark:text-white font-bold text-md lg:text-lg 2xl:text-xl -ms-[0px] mb-2 text-end">
        {children}
      </h2>
    );
  }

  function Text({ children }) {
    return (
      <p className="text-neutral-900 dark:text-neutral-400 text-sm max-w-60 2xl:max-w-[360px] text-end">
        {children}
      </p>
    );
  }

  export default {
    Root,
    Item,
    Point,
    Content,
    Date,
    Title,
    Text,
  };
