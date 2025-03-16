import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

import { IoIosGlobe } from "react-icons/io";

export default function LanguageSelector() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("nav");

    const handleLanguageChange = async (lang: "en" | "pt-BR") => {
        router.push(`${lang}`);
        router.refresh();
    };

    return (
        <Select onValueChange={handleLanguageChange} defaultValue={locale}>
            <SelectTrigger
                className="w-[180px] justify-self-end z-[100] bg-black"
                aria-label={t("languageBtnAlt")}
            >
                <div className="flex items-center gap-x-2 text-white font-medium">
                    <IoIosGlobe className="text-2xl" />
                    Language
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pt-BR">Português</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    );
}
