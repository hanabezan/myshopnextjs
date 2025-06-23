import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ message: "البريد مستخدم من قبل" }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return NextResponse.json({ message: "تم التسجيل بنجاح" })
}
