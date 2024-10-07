import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import { DecodedToken } from "@/Constants";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let allowSite = request.cookies.get("allow-site");
  let allowSize = request.cookies.get("allow-size");
  let allowCalendar = request.cookies.get("allow-calendar");
  let token = request.cookies.get("token");


  if (request.nextUrl.pathname.endsWith("size")) {
    if (!allowSize?.value) {
      return NextResponse.redirect(new URL("/dashboard/site", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.endsWith("calendar")) {
    if (!allowCalendar?.value) {
      if (!allowSize?.value) {
        return NextResponse.redirect(new URL("/dashboard/site", request.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard/size", request.url));
      }
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (token?.value) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (token) {
      const decodedToken = jwt.decode(token?.value) as DecodedToken;

      const isAdmin = decodedToken?.roles.includes('admin')

      if (isAdmin) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  }
}

//See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
