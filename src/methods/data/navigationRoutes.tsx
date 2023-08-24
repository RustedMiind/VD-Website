export type NavigationRouteType = {
  name: string;
  path: string;
};

export type NavigationRoutesType = NavigationRouteType[];

export const navigationRoutes: NavigationRoutesType = [
  { name: "links.home", path: "/" },
  { name: "links.aboutUs", path: "/about" },
  { name: "links.projects", path: "/projects" },
  { name: "links.contact", path: "/contact" },
  { name: "links.news", path: "/news" },
];
