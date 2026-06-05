export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/marketplace") {
    return pathname === "/marketplace" || pathname === "/search" || pathname.startsWith("/listings/");
  }

  return pathname === href;
}
