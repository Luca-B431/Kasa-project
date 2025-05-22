import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/page.tsx"),
  route("/about", "routes/about/page.tsx"),
  route(`/locations/:id`, "routes/locations/(id)/page.tsx"),
] satisfies RouteConfig;
