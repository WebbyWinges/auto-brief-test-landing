import type { FC } from "react";

import { useTranslation } from "@/src/app/lib/hooks/useTranslation";
import { locales } from "@/src/app/lib/utils/locales";
import Select from "../Select";
import { Planet } from "@/src/app/assets/icons/Planet";

export const LocaleSwitcher: FC = () => {
  const { t, i18n } = useTranslation({ namespace: "LocaleSwitcher" });
  const locale = i18n.language;

  const handleChange = (value: string): void => {
    i18n.changeLanguage(value);
  };

  const languageOptions = locales.map((lang: "ru" | "en") => ({
    value: lang,
    label: t(`locale.${lang}`),
  }));

  return (
    <div>
      <Select
        LeftIcon={<Planet />}
        options={languageOptions}
        value={locale}
        onChange={handleChange}
      />
    </div>
  );
};
