"use client";
import { useEffect } from "react";
import { BiSolidSun, BiSun, BiMoon, BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function DarkModeSelector() {
  const { systemTheme, theme, setTheme } = useTheme();
  var currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    currentTheme = theme;
  }, []);

  return (
    <button
      className="bg-white dark:bg-black group transition duration-300 text-xl hover:bg-black dark:hover:bg-white p-3 rounded border border-neutral-400 dark:border-neutral-800 dark:text-white text-black z-50"
      onClick={handleThemeChange}
    >
      <BiSun className="text-white group-hover:text-black hidden dark:block transition duration-300" />
      <BiMoon className="text-black group-hover:text-white dark:hidden transition duration-300" />
    </button>
  );
}
