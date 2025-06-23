import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import bcrypt from "bcrypt"
import type { SessionStrategy } from "next-auth"


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
        CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email || "" }
        })

        if (!user) return null

        const isValid = await bcrypt.compare(credentials!.password, user.password)
        if (!isValid) return null

return {
  id: user.id.toString(),
  name: user.name,
  email: user.email,
//   role: user.role
}      }
    })
  ],
  pages: {
    signIn: "/login"
  },

//   session: {
//     strategy: "jwt"
//   },

session: {
  strategy: "jwt" as SessionStrategy
},
  secret: process.env.NEXTAUTH_SECRET

  
}
