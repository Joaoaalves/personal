export default function Skill({ tec, percentage, color }) {
  return (
    <div className="flex flex-col items-start xl:items-end w-full">
      <p className="text-md xl:text-lg">{tec}</p>
      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-1">
        <div
          className={`h-full rounded-full xl:ms-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}