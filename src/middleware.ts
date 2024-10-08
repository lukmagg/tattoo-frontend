import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import { DecodedToken } from "@/Constants";
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();

  const allowSite = cookieStore.get("allow-site")?.value;
  const allowSize = cookieStore.get("allow-size")?.value;

  const allowCalendar = cookieStore.get("allow-calendar")?.value;
  let token = cookieStore.get("token")?.value;


  if (request.nextUrl.pathname.endsWith("size")) {
    console.log(`allowSize: ${allowSize}`)
    if (allowSize !== '1') {
      return NextResponse.redirect(new URL("/dashboard/site", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.endsWith("calendar")) {
    console.log(`allowCalendar: ${allowCalendar}`)
    console.log(`allowSize: ${allowSize}`)
    if (allowCalendar !== '1') {
      if (allowSize !== '1') {
        return NextResponse.redirect(new URL("/dashboard/site", request.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard/size", request.url));
      }
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (token) {
      const decodedToken = jwt.decode(token) as DecodedToken;

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
