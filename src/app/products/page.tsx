// import { prisma } from "@/lib/prisma";
// import Link from "next/link"

// export default async function ProductsPage() {
//   const products = await prisma.product.findMany()

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-4">المنتجات</h2>
//       <ul className="space-y-4">
//         {products.map((product) => (
//           <li key={product.id} className="border p-4 rounded">
//             <h3 className="text-xl">{product.name}</h3>
//             <p>السعر: {product.price} د.ل</p>
//             <Link href={`/products/${product.id}`} className="text-blue-600 underline">
//               تفاصيل
//             </Link>
//           </li>
          
//         ))}
//       </ul>
//     </div>

//   );
  
// }


import { prisma } from "@/lib/prisma"
import ClientProductList from "./ClientProductList"

export default async function ProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">المنتجات</h2>
      <ClientProductList products={products} />
    </div>
  )
}
