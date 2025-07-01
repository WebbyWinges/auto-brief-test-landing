import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { usePrevious } from "./usePrevious";

interface NavigationEvents {
  routeChanged: ({ url }: { url: string }) => void;
}

export const useNavigation = ({
  on: { routeChanged },
}: {
  on: NavigationEvents;
}) => {
  const isFirst = useRef(true);

  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);

  const searchParams = useSearchParams();
  const prevSearchParams = usePrevious(searchParams);

  useEffect(() => {
    let url = window.origin + pathname;
    if (searchParams?.toString()) {
      url = url + `?${searchParams.toString()}`;
    }
    if (isFirst.current) {
      isFirst.current = false;
      routeChanged({ url });
    } else if (
      searchParams?.toString() !== prevSearchParams?.toString() ||
      pathname !== prevPathname
    ) {
      routeChanged({ url });
    }
  }, [pathname, prevPathname, prevSearchParams, routeChanged, searchParams]);
};
