export { default } from "next-auth/middleware"

// 이 설정이 있으면 모든 페이지가 로그인 없이는 접근 불가하게 됩니다.
export const config = { 
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] 
}
