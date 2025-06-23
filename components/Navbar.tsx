import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
      <Link href="/" className="font-bold">المتجر</Link>
      <div className="space-x-4">
        <Link href="/">الرئيسية</Link>
        <Link href="/products">المنتجات</Link>
      </div>
        <div className="flex items-center space-x-2">
            <Link href="/cart" className="text-white">السلة</Link>
            <Link href="/login" className="text-white">تسجيل الدخول</Link>
            <Link href="/signup" className="text-white">إنشاء حساب</Link>

            
             </div>
             
    </nav>
  );
}
// This is a simple Navbar component for a Next.js application.
// It includes links to the home page and the products page.    
