"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    })

    if (res?.ok) {
      router.push("/admin/products")
    } else {
      setError("بيانات الدخول غير صحيحة")
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input className="border p-2 w-full" placeholder="البريد الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">دخول</button>
      </form>
    </div>
  )
}
