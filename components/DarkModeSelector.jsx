"use client"
import { useEffect } from "react";
import { BiSolidSun, BiSun, BiMoon, BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function DarkModeSelector(){
  const { systemTheme, theme, setTheme } = useTheme();
  var currentTheme = theme === 'system' ? systemTheme : theme;

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    currentTheme = theme
  }, [])

  return (
    <button className="group transition duration-300 text-xl hover:bg-[#000] dark:hover:bg-[#fff] p-3 rounded border border-black dark:border-white" onClick={handleThemeChange}>
  
        <BiSun className="text-white group-hover:text-black hidden dark:block transition duration-300"/>
        <BiMoon  className="text-black group-hover:text-white dark:hidden transition duration-300"/>
    </button>
  )
}