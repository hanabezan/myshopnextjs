import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function AdminProductsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const products = await prisma.product.findMany()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">لوحة إدارة المنتجات</h1>
      <p className="text-sm text-gray-600">مرحبًا، {session.user?.email}</p>

      <Link href="/admin/products/create" className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block">
        + منتج جديد
      </Link>

      {/* جدول المنتجات مثل السابق */}
    </div>
  )
}
