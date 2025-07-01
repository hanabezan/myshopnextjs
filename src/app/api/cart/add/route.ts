import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
// import { authOptions } from "../api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import NextAuth from "next-auth"
import { authOptions } from "@/lib/authOptions"

const handler = NextAuth(authOptions)

 
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "غير مسموح" }, { status: 401 })
  }
  const userId = session.user.id

  const item = await req.json()

  let cart = await prisma.cart.findFirst({ where: { userId } })
  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } })
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId: item.productId },
  })

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + item.quantity },
    })
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      },
    })
  }

  return NextResponse.json({ success: true })
}
