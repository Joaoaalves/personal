export default function Skill({ tec, percentage, experience}) {
  return (
    <div className="flex flex-col items-start xl:items-end w-full">
      <p className="text-md xl:text-lg">{tec}</p>
      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-1 flex xl:flex-row-reverse items-center">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500`}
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="h-4 w-1 dark:bg-neutral-200 bg-black rounded -ms-1 xl:-me-1 relative">
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 dark:text-neutral-300 font-medium text-xs text-nowrap">{experience}</span>
        </div>
      </div>
    </div>
  );
}