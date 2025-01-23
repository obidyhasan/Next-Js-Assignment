import { NextResponse } from "next/server";

export function middleware(request) {
  const user = "";
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// matching paths
export const config = {
  matcher: "/profile",
};
