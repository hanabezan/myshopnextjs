import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  })
  return NextResponse.json(product)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json()
  await prisma.product.update({
    where: { id: parseInt(params.id) },
    data: {
      name: data.name,
      price: data.price,
     }
  })

  return NextResponse.json({ message: "تم التحديث" })
}
