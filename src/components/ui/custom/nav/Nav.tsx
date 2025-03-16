import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import { GlareContainer } from "../../GlareContainer";
import { links } from "@/data/links";

export default function Nav() {
    return (
        <GlareContainer>
            <nav className="hidden lg:grid grid-cols-3 items-center px-8 h-full z-[120] mw-full">
                <a
                    href="#home"
                    className={`text-neutral-200 font-black hover:text-black text-xl z-[100] font-name group flex items-center gap-x-1 w-full`}
                >
                    <span className="transition-all duration-300 delay-0 group-hover:max-w-0 max-w-40 overflow-hidden text-nowrap">
                        João Alves
                    </span>
                    <span className="transition-all duration-300 delay-0 group-hover:delay-300 group-hover:max-w-36 text-nowrap max-w-0 overflow-hidden">
                        {"<My Name>"}
                    </span>
                </a>

                <NavLinks links={links} />

                <LanguageSelector />
            </nav>
        </GlareContainer>
    );
}
