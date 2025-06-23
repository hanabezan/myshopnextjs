import NextAuth, { AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "البريد الإلكتروني", type: "email" },
        password: { label: "كلمة المرور", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        if (!user) return null

        // تحقق من كلمة السر هنا (bcrypt مثلاً)

        return {
          ...user,
          id: user.id.toString(),
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },

  
  callbacks: {
async session({ session, token }) {
    if (session.user) {
      session.user.id = token.sub || ""
    }
    return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
