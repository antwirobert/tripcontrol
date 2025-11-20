import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  // "/" redirects to /sign-in
  route("", "routes/root/index.tsx"),

  // /sign-in page
  route("sign-in", "routes/root/sign-in.tsx"),

  // Admin layout
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
    route("trips", "routes/admin/trips.tsx"),
    route("trips/create", "routes/admin/create-trip.tsx"),
    route("trips/:tripId", "routes/admin/trip-detail.tsx"),
  ])
] satisfies RouteConfig;
