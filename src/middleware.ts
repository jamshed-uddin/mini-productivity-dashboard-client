import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  console.log("req url", request.url);
  console.log("pathname", pathname);

  const privateRoutes = ["/dashboard", "/dashboard/tasks", "/dashboard/goals"];
  const authRoutes = ["/login", "/register"];
  const isRoot = pathname === "/";

  // If on auth page but already logged in → redirect to dashboard
  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If on root → send to /dashboard if logged in, else to /login
  if (isRoot) {
    const destination = token ? "/dashboard" : "/login";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  // If on private route but not logged in → redirect to login
  if (privateRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow everything else (static files, public routes, API)
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};
