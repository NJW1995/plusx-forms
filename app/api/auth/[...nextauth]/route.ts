import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // 내부(Internal) 설정이더라도 한 번 더 안전하게 도메인 체크를 합니다.
  callbacks: {
    async signIn({ user }) {
      const allowedDomain = "@plus-ex.com"; // 실제 회사 이메일 도메인으로 수정하세요
      if (user.email?.endsWith(allowedDomain)) {
        return true;
      }
      return false;
    },
  },
})

export { handler as GET, handler as POST }
