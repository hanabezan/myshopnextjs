 
"use client"
import Link from "next/link"
import { useCart } from "@/components/CartContext"
import { useState } from "react"


export default function ClientProductList({ products }: { products: any[] }) {
  const { addToCart } = useCart()
    const [message, setMessage] = useState("")

const handleAddToCart = (product: any) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    setMessage("تمت الإضافة إلى السلة بنجاح!")
    setTimeout(() => setMessage(""), 3000) // تختفي الرسالة بعد 3 ثواني
  }

  return (
    <>
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}

      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.id} className="border p-4 rounded">
            <h3 className="text-xl">{product.name}</h3>
            <p>السعر: {product.price} د.ل</p>
            <div className="flex items-center space-x-4">
              <Link href={`/products/${product.id}`} className="text-blue-600 underline">
                تفاصيل
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                أضف إلى السلة
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

