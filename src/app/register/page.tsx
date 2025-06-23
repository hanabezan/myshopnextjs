// "use client"
// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function RegisterPage() {
//   const router = useRouter()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const res = await fetch("/api/register", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: { "Content-Type": "application/json" }
//     })

//     if (res.ok) {
//       router.push("/login")
//     } else {
//       const data = await res.json()
//       setError(data.message)
//     }
//   }

//   return (
//     <div className="p-8 max-w-md">
//       <h1 className="text-xl font-bold mb-4">تسجيل حساب جديد</h1>
//       {error && <p className="text-red-600 mb-2">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="border p-2 w-full" placeholder="الاسم" value={name} onChange={e => setName(e.target.value)} />
//         <input className="border p-2 w-full" placeholder="البريد الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} />
//         <input className="border p-2 w-full" type="password" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">تسجيل</button>
//       </form>
//     </div>
//   )
// }
"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function UserProfile() {
  const { data: session } = useSession()

  if (!session) {
    return <button onClick={() => signIn()}>تسجيل دخول</button>
  }

  return (
    <div>
      <p>مرحبًا {session.user?.email}</p>
      <button onClick={() => signOut()}>تسجيل خروج</button>
    </div>
  )
}
