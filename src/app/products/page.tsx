import { prisma } from "@/lib/prisma";
import Link from "next/link"

export default async function ProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">المنتجات</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <h3 className="text-xl">{product.name}</h3>
            <p>السعر: {product.price} د.ل</p>
            <Link href={`/products/${product.id}`} className="text-blue-600 underline">
              تفاصيل
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}







// import Link from "next/link";

// const products = [
//   { id: 1, name: "نظارة شمسية", price: 120 },
//   { id: 2, name: "عدسات لاصقة", price: 75 },
//     { id: 3, name: "إطار نظارات", price: 200 },
//     { id: 4, name: "محلول عدسات", price: 50 },
//     { id: 5, name: "نظارات طبية", price: 300 },
//     { id: 6, name: "نظارات رياضية", price: 150 },
//     { id: 7, name: "نظارات أطفال", price: 80 },
//     { id: 8, name: "نظارات شمسية فاخرة", price: 500 },
//     { id: 9, name: "عدسات لاصقة ملونة", price: 90 },
//     { id: 10, name: "نظارات قراءة", price: 60 },
//     { id: 11, name: "نظارات مضادة للانعكاس", price: 180 },
//     { id: 12, name: "نظارات VR", price: 400 },
//     { id: 13, name: "نظارات شمسية رياضية", price: 220 },
//     { id: 14, name: "عدسات لاصقة يومية", price: 30 },
//     { id: 15, name: "نظارات شمسية للأطفال", price: 100 },


//     { id: 16, name: "نظارات شمسية للرجال", price: 250 },
//     { id: 17, name: "نظارات شمسية للنساء", price: 260 },
//     { id: 18, name: "نظارات شمسية كلاسيكية", price: 300 },
//     { id: 19, name: "نظارات شمسية رياضية للأطفال", price: 120 },
//     { id: 20, name: "نظارات شمسية بتقنية UV", price: 350 },

//     { id: 21, name: "نظارات شمسية بتقنية Polarized", price: 400 },
//     { id: 22, name: "نظارات شمسية بتقنية Photochromic", price: 450 },
//     { id: 23, name: "نظارات شمسية بتقنية Anti-Fog", price: 500 },
//     { id: 24, name: "نظارات شمسية بتقنية Scratch-Resistant", price: 550 },
//     { id: 25, name: "نظارات شمسية بتقنية Blue Light Blocking", price: 600 },

//     { id: 26, name: "نظارات شمسية بتقنية Mirror", price: 650 },
//     { id: 27, name: "نظارات شمسية بتقنية Gradient", price: 700 },
//     { id: 28, name: "نظارات شمسية بتقنية Wrap-Around", price: 750 },
//     { id: 29, name: "نظارات شمسية بتقنية Oversized", price: 800 },
//     { id: 30, name: "نظارات شمسية بتقنية Cat-Eye", price: 850 },
// ];

// export default function ProductsPage() {
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
