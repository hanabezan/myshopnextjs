const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = "h.bezan@becom.ly"
  const password = "admin123"  // غيرها لكلمة سر مناسبة
  const hashedPassword = await bcrypt.hash(password, 10)

  // تحقق هل المستخدم موجود
  const existingAdmin = await prisma.user.findUnique({ where: { email } })

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        name: "Admin",
        email,
        password: hashedPassword, // خزن كلمة السر مشفرة
        role: "ADMIN", // أو حسب حقل الرول عندك
      },
    })
    console.log("تم إنشاء المستخدم الإداري الافتراضي بنجاح")
  } else {
    console.log("المستخدم الإداري موجود مسبقاً")
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })






const products = [
  { name: "نظارة شمسية", price: 120 },
  { name: "عدسات لاصقة", price: 75 },
  { name: "إطار نظارات", price: 200 },
  { name: "محلول عدسات", price: 50 },
  { name: "نظارات طبية", price: 300 },
  { name: "نظارات رياضية", price: 150 },
  { name: "نظارات أطفال", price: 80 },
  { name: "نظارات شمسية فاخرة", price: 500 },
  { name: "عدسات لاصقة ملونة", price: 90 },
  { name: "نظارات قراءة", price: 60 },
  { name: "نظارات مضادة للانعكاس", price: 180 },
  { name: "نظارات VR", price: 400 },
  { name: "نظارات شمسية رياضية", price: 220 },
  { name: "عدسات لاصقة يومية", price: 30 },
  { name: "نظارات شمسية للأطفال", price: 100 },
  { name: "نظارات شمسية للرجال", price: 250 },
  { name: "نظارات شمسية للنساء", price: 260 },
  { name: "نظارات شمسية كلاسيكية", price: 300 },
  { name: "نظارات شمسية رياضية للأطفال", price: 120 },
  { name: "نظارات شمسية بتقنية UV", price: 350 },
  { name: "نظارات شمسية بتقنية Polarized", price: 400 },
  { name: "نظارات شمسية بتقنية Photochromic", price: 450 },
  { name: "نظارات شمسية بتقنية Anti-Fog", price: 500 },
  { name: "نظارات شمسية بتقنية Scratch-Resistant", price: 550 },
  { name: "نظارات شمسية بتقنية Blue Light Blocking", price: 600 },
  { name: "نظارات شمسية بتقنية Mirror", price: 650 },
  { name: "نظارات شمسية بتقنية Gradient", price: 700 },
  { name: "نظارات شمسية بتقنية Wrap-Around", price: 750 },
  { name: "نظارات شمسية بتقنية Oversized", price: 800 },
  { name: "نظارات شمسية بتقنية Cat-Eye", price: 850 },
];

async function main() {
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  console.log("✅ تم إدخال المنتجات بنجاح.");
}

main()
  .catch((e) => {
    console.error("❌ خطأ أثناء الإدخال:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
