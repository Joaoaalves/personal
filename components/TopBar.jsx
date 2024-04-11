import { useState, useEffect } from 'react';
import DarkModeSelector from "./DarkModeSelector";
import LanguageSelector from "./LanguageSelector";
import FloatingNav from "./FloatingNav";

export default function TopBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`fixed w-full px-2 sm:px-8 pt-4 lg:w-auto lg:top-4 lg:right-8 flex items-start justify-between lg:justify-end gap-x-2 sm:gap-x-8 z-50 transition-transform duration-300 ${visible ? '' : '-translate-y-24'}`}>
      <FloatingNav />
      <LanguageSelector />
      <DarkModeSelector />
    </div>
  );
}
