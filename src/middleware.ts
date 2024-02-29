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
	ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/icon"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
