import Link from "next/link";

export default function Button({ children, href, className }) {
  return (
    <Link
      href={href ? href : ''}
      target="_blank"
      className={`flex items-center justify-center border-[1px] border-black dark:border-white 
      rounded-lg font-bold before:ease relative h-12 w-3/4 xl:w-auto px-4 overflow-hidden  text-black
       dark:text-white  transition-all before:absolute before:top-1/2 before:h-0 before:w-80 before:origin-center 
       before:-translate-x-16 before:rotate-45 before:bg-black dark:before:bg-white before:duration-300
        hover:text-white dark:hover:text-black hover:shadow-black/50 dark:hover:shadow-none hover:before:h-64 
        hover:before:-translate-y-32 ${className}`}
    >
      <span className="z-10 flex items-center gap-x-2">{children}</span>
    </Link>
  );
}
