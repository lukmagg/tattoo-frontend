import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let allowSite = request.cookies.get("allow-site");
  let allowSize = request.cookies.get("allow-size");

  if (request.nextUrl.pathname.endsWith("site")) {
    if (!allowSite?.value) {
      return NextResponse.redirect(new URL("/dashboard/calendar", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.endsWith("size")) {
    if (!allowSize?.value) {
      if (!allowSite?.value) {
        return NextResponse.redirect(
          new URL("/dashboard/calendar", request.url)
        );
      } else {
        return NextResponse.redirect(new URL("/dashboard/site", request.url));
      }
    } else {
      return NextResponse.next();
    }
  }
}

//See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
