import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

type Params = {
  params: {
    id: string
  }
}

export async function POST({ params }: Params) {
  await prisma.product.delete({
    where: { id: parseInt(params.id) }
  })

  redirect("/admin/products")
}
