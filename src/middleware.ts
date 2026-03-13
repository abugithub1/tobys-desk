import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("site-auth")?.value === "true";
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isAuthApi = request.nextUrl.pathname === "/api/auth";

  // Allow login page and auth API without authentication
  if (isLoginPage || isAuthApi) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files, Next.js internals, and PWA assets
    "/((?!_next/static|_next/image|favicon.ico|images/|sw\\.js|manifest\\.json|icon-.*\\.png).*)",
  ],
};
