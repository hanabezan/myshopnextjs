import Link from "next/link"
import { prisma } from "@/lib/prisma"

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">لوحة إدارة المنتجات</h1>
      <Link href="/admin/products/create" className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block">
        + منتج جديد
      </Link>

      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">الاسم</th>
            <th className="p-2 border">السعر</th>
            <th className="p-2 border">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.price}</td>
              <td className="p-2 border space-x-2">
                <Link href={`/admin/products/edit/${p.id}`} className="text-blue-500 underline">تعديل</Link>
                <form action={`/admin/products/delete/${p.id}`} method="POST" className="inline">
                  <button className="text-red-500 ml-4" type="submit">حذف</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
