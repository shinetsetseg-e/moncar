export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/search") {
    return pathname === "/search" || pathname.startsWith("/listings/");
  }

  return pathname === href;
}
