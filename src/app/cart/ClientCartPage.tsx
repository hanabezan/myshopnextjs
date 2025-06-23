"use client"
import { useCart } from "@/components/CartContext"

export default function ClientCartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🛒 سلة التسوق</h1>

      {cart.length === 0 ? (
        <p>سلتك فارغة.</p>
      ) : (
        <>
          <table className="w-full border">
            <thead>
              <tr>
                <th>المنتج</th>
                <th>السعر</th>
                <th>الكمية</th>
                <th>إزالة</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.productId}>
                  <td>{item.name}</td>
                  <td>{item.price} د.ل</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.productId)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-4 font-bold">الإجمالي: {total.toFixed(2)} د.ل</p>

          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded" onClick={clearCart}>
            🗑️ تفريغ السلة
          </button>
        </>
      )}
    </div>
  )
}
