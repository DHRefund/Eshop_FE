import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

// Danh sách các route không cần bảo vệ
const publicRoutes = [
  //   "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/api/",
  "/_next/",
  "/static/",
  "/images/",
  "/favicon.ico",
];

export async function middleware(request: NextRequest) {
  console.log("Middleware executing for:", request.nextUrl.pathname);

  // Kiểm tra xem route hiện tại có phải là public route không
  const isPublicRoute = publicRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  //   if (isPublicRoute) {
  //     console.log("Public route, skipping auth check");
  //     return NextResponse.next();
  //   }

  // Log cookies và headers cho debug
  //   console.log("Cookies present:", request.cookies.getAll().map(c => c.name));
  //   console.log("Request headers:", Object.fromEntries(request.headers.entries()));

  try {
    // Kiểm tra session
    const session = await auth(request as any);
    // console.log("session>>>>", session);
    console.log("user111", session?.user);
    if (!session) {
      //   console.log("No valid session, redirecting to login");

      // Lưu URL hiện tại để redirect sau khi đăng nhập
      //   const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.url);

      return NextResponse.redirect(loginUrl);
    }

    // console.log("User authenticated, proceeding");
    return NextResponse.next();
  } catch (error) {
    // console.error("Error in middleware:", error);

    // Redirect to login on error
    // const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
}

// Áp dụng middleware cho tất cả các routes trừ static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
