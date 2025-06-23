"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (!params.id) return;

    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name)
        setPrice(data.price.toString())
        setDescription(data.description)
      })
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price: parseFloat(price), description }),
      headers: { "Content-Type": "application/json" }
    })

    router.push("/admin/products")
  }

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-xl font-bold mb-4">تعديل منتج</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border p-2 w-full" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 w-full" value={price} onChange={e => setPrice(e.target.value)} type="number" />
        <textarea className="border p-2 w-full" value={description} onChange={e => setDescription(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">حفظ التعديل</button>
      </form>
    </div>
  )
}
