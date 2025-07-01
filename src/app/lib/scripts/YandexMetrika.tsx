"use client";

import { useNavigation } from "../hooks/useNavigation/useNavigation";

export default function YandexMetrika() {
  useNavigation({
    on: {
      routeChanged: ({ url }) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.ym && window.ym(103157954, "hit", url);
      },
    },
  });

  return null;
}
