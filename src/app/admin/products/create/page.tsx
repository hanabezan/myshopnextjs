"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateProductPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price: parseFloat(price), description }),
      headers: { "Content-Type": "application/json" }
    })
    router.push("/admin/products")
  }

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-xl font-bold mb-4">إضافة منتج جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border p-2 w-full" placeholder="اسم المنتج" value={name} onChange={e => setName(e.target.value)} required />
        <input className="border p-2 w-full" placeholder="السعر" value={price} onChange={e => setPrice(e.target.value)} required type="number" />
        <textarea className="border p-2 w-full" placeholder="الوصف" value={description} onChange={e => setDescription(e.target.value)} required />
        <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">حفظ</button>
      </form>
    </div>
  )
}
