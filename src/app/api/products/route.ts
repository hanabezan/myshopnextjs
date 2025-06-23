import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()
  const { name, price, description } = data

  await prisma.product.create({
    data: { name, price }
  })

  return NextResponse.json({ message: "تم الإضافة" })
}
