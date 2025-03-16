"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface ScrollContextProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextProps>({
    activeSection: "",
    setActiveSection: () => {},
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleIntersections = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) {
                        setActiveSection(id);
                    }
                }
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(
            handleIntersections,
            observerOptions,
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);
