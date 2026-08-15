import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }
  return {
    locale,
    messages: {
      home: (await import(`../../messages/${locale}/home.json`)).default,
      metadata: (await import(`../../messages/${locale}/metadata.json`)).default,
    },
  };
});
