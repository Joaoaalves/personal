import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ReactCountryFlag from "react-country-flag";
export default function LanguageSelector() {
  const router = useRouter();
  const { t } = useTranslation();

  const changeLocale = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-neutral-400 dark:border-neutral-800 z-50"
        >
          {t("language") ? (
            t("language") === "pt-BR" ? (
              <>
                <ReactCountryFlag
                  countryCode="BR"
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  className="me-4"
                  alt="Brazilian flag"
                />{" "}
                Português{" "}
              </>
            ) : (
              <>
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  className="me-4"
                  alt="English flag"
                />{" "}
                English{" "}
              </>
            )
          ) : (
            "Language"
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("language-selector.title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={t("language")}
          onValueChange={(newValue) => {
            changeLocale(newValue);
          }}
        >
          <DropdownMenuRadioItem
            className="hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-700 cursor-pointer"
            value="en"
          >
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              className="me-4"
            />
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-700 cursor-pointer"
            value="pt-BR"
          >
            <ReactCountryFlag
              countryCode="BR"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              className="me-4"
            />
            Português
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
