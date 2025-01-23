import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  let user = null;
  const { getUser } = getKindeServerSession();
  user = await getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }
}

// matching paths
export const config = {
  matcher: "/profile",
};
