import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLinkProps {
    title: string;
    href: string;
    active: boolean;
}

export default function NavLink({ title, href, active }: NavLinkProps) {
    const t = useTranslations("nav");
    return (
        <li>
            <Link
                href={href}
                className="text-white text-lg 2xl:text-xl font-medium hover:text-black transition-all duration-300 data-[active=true]:text-secondary"
                data-active={active}
            >
                {t(title)}
            </Link>
        </li>
    );
}
