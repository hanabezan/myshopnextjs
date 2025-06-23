import './globals.css'
import Navbar from '@/components/Navbar'
import { Cairo } from "next/font/google";
import { CartProvider } from "@/components/CartContext"


const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],    
  display: 'swap',
});

export const metadata = {
  title: 'متجري',
  description: 'أفضل متجر إلكتروني في ليبيا',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
          <body className={cairo.className}>
        <Navbar />
   
           <CartProvider>
          {children}
        </CartProvider>
    
      </body>
    </html>
  )
}
