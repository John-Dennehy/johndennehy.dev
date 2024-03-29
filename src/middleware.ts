import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		// "/api(.*)",
		"/blog(.*)",
		"/contact",
		"/cv(.*)",
		"/experience(.*)",
		"/projects(.*)",
	],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
