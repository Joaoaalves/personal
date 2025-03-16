import NavLink from "./NavLink";
import { useScrollContext } from "@/contexts/ScrollProvider";

interface NavLinksProps {
    links: { id: string; title: string; icon: React.ReactNode; href: string }[];
}

export default function NavLinks({ links }: NavLinksProps) {
    const { activeSection } = useScrollContext();

    return (
        <ul className="flex items-center justify-center gap-x-4 z-[100]">
            {links?.length > 0 &&
                links.map((link, index) => (
                    <NavLink
                        title={link.title}
                        href={link.href}
                        key={`desktop-link-${index}`}
                        active={link.id === activeSection}
                    />
                ))}
        </ul>
    );
}
