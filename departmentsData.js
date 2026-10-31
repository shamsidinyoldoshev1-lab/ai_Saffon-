// departmentsData.js - Tashkiliy tuzilma ma'lumotlari

export const executiveLeadership = {
  ceo: {
    id: "ceo",
    name: "Ali",
    role: "Bosh Direktor (CEO AI)",
    title: "Ali · Bosh Direktor (CEO AI)",
    desc: "Strategik boshqaruv va qarorlar",
    bgColor: "#161d37",
    textColor: "text-white"
  },
  caio: {
    id: "caio",
    name: "Saffon",
    role: "Ijrochi Sun'iy Intellekt",
    title: "Saffon · Ijrochi Sun'iy Intellekt",
    desc: "Chief AI Officer · barcha AI yo'nalishlarini muvofiqlashtiradi · @ijrochiai_bot",
    hasActiveBadge: true,
    bgColor: "#7259b4",
    textColor: "text-white"
  }
};

export const managersData = [
  {
    id: "muhammad-umar",
    name: "Muhammad Umar",
    role: "Data Direktori · CDO AI",
    bgColor: "#2b5b9e",
    departmentIds: [9, 10]
  },
  {
    id: "zakiy",
    name: "Zakiy",
    role: "Bosh Moliyachi · CFO AI",
    bgColor: "#226b52",
    departmentIds: [1]
  },
  {
    id: "mahsun",
    name: "Mahsun",
    role: "Marketing Direktori · CMO AI",
    bgColor: "#b86733",
    departmentIds: [2]
  },
  {
    id: "salmon",
    name: "Salmon",
    role: "Savdo Direktori · CSO AI",
    bgColor: "#3779bf",
    departmentIds: [3]
  },
  {
    id: "abdulloh",
    name: "Abdulloh",
    role: "Shariat Qo'mitasi Raisi · Shariat AI",
    bgColor: "#74508e",
    departmentIds: [8]
  },
  {
    id: "sardor",
    name: "Sardor",
    role: "Ta'minot Direktori · SCM AI",
    bgColor: "#417e54",
    departmentIds: [7]
  },
  {
    id: "hamza",
    name: "Hamza",
    role: "Inson Resurslari Direktori · CHRO AI",
    bgColor: "#a5485d",
    departmentIds: [4]
  },
  {
    id: "jamshid",
    name: "Jamshid",
    role: "Yuridik Direktori · CLO AI",
    bgColor: "#466896",
    departmentIds: [13]
  },
  {
    id: "xolid",
    name: "Xolid",
    role: "Xavfsizlik Direktori · CSO AI",
    bgColor: "#a74744",
    departmentIds: [5]
  },
  {
    id: "rafiq",
    name: "Rafiq",
    role: "Innovatsiya Direktori · CTO AI",
    bgColor: "#78448b",
    departmentIds: [6]
  }
];

export const departmentsData = [
  {
    id: 1,
    title: "1. Moliya Departamenti",
    subtitle: "Zakiy · Moliya",
    headerBg: "#0e9488", // Teal
    managerId: "zakiy",
    items: [
      {
        title: "Bosh moliyachi — Zakiy",
        desc: "AI CFO — umumiy moliya boshqaruvi (rahbar)",
        checked: true
      },
      {
        title: "Bosh kassir — Sodiq",
        desc: "To'lovlar va g'aznachilik — birorta to'lov kechikmasin",
        checked: true
      },
      {
        title: "Bosh hisobchi — Rashid",
        desc: "Bank hisobi, soliq, ish haqi, hisobotlar (1C)",
        checked: true
      },
      {
        title: "Moliya analitigi — Zayn",
        desc: "Plan va fakt, foyda, filiallar reytingi, prognoz",
        checked: true
      },
      {
        title: "Moliya auditori — Umar",
        desc: "Ichki audit, firibgarlik nazorati",
        checked: true
      }
    ]
  },
  {
    id: 2,
    title: "2. Marketing Departamenti",
    subtitle: "Mahsun · Marketing",
    headerBg: "#ea8b3e", // Orange
    managerId: "mahsun",
    items: [
      {
        title: "Marketing bo'limi rahbari (CMO) — Mahsun",
        desc: "CMO — strategiya, budjet, KPI/ROI, butun marketing faoliyati (rahbar)",
        checked: true
      },
      {
        title: "Brendlarni boshqarish — Bilol",
        desc: "ADAMXARI · SAFFON · UNO · MEDIUM brendlari rivoji",
        checked: true
      },
      {
        title: "Raqamli marketing (Ads) — Zayn",
        desc: "Meta/Google/TikTok/Telegram Ads — ROAS, CPA, byudjet",
        checked: true
      },
      {
        title: "Kreativ studiya — Sa'd",
        desc: "Dizayn, kontent, foto-video, brend uslubi",
        checked: true
      },
      {
        title: "Ijtimoiy tarmoqlar (SMM) — Zubayr",
        desc: "Instagram · Telegram · TikTok · Reels · Community",
        checked: true
      },
      {
        title: "Mijozlar va sodiqlik (CRM) — Yusuf",
        desc: "CRM, bonus, sodiqlik dasturi, qayta xarid",
        checked: true
      },
      {
        title: "Marketing tahlili — Amir",
        desc: "KPI, dashboard, savdo va marketing tahlili",
        checked: true
      },
      {
        title: "Bozor razvedkasi — Malik",
        desc: "20 raqobatchi kuzatuvda (har brendga 5 ta)",
        checked: true
      }
    ]
  },
  {
    id: 3,
    title: "3. Savdo Departamenti",
    subtitle: "Salmon · Savdo",
    headerBg: "#4379d5", // Blue
    managerId: "salmon",
    items: [
      {
        title: "Sotuv bo'lim rahbari — Salmon",
        desc: "Butun sotuv departamentini boshqarish (rahbar)",
        checked: true
      },
      {
        title: "ROP, savdo jamoasi boshlig'i — Rizvon",
        desc: "Savdo jamoasi: operativka, motivatsiya, kunlik nazorat",
        checked: true
      },
      {
        title: "Brend menejer — Badr",
        desc: "Brend kesimida sotuv (Adamxari / Raffini / Medium)",
        checked: true
      },
      {
        title: "Hududiy menejer — Hamza",
        desc: "Hudud filiallari nazorati va standartlar",
        checked: true
      },
      {
        title: "Do'kon menejeri — Dovud",
        desc: "Do'kon operatsiyalari va jamoa intizomi",
        checked: true
      },
      {
        title: "Kassirlar",
        desc: "Kunlik kassa yopish va POS nazorati",
        checked: true
      },
      {
        title: "Sotuvchilar",
        desc: "Sotuv, mijoz bilan ishlash, reyting",
        checked: true
      },
      {
        title: "Vitrinachilar",
        desc: "Vitrina va do'kon ko'rinishi",
        checked: true
      },
      {
        title: "Do'kon tozalik xodimi",
        desc: "Do'kon tozaligi standarti",
        checked: false
      }
    ]
  },
  {
    id: 4,
    title: "4. HR Departamenti",
    subtitle: "Hamza · Xodimlar",
    headerBg: "#d85d74", // Rose
    managerId: "hamza",
    items: [
      {
        title: "HR bo'lim rahbari — Hamza",
        desc: "HR bo'limini umumiy boshqarish (rahbar)",
        checked: true
      },
      {
        title: "Rekruter — Rauf",
        desc: "Kadr izlash, suhbat, nomzodlarni saralash",
        checked: true
      },
      {
        title: "Onboarding va o'qitish — Suhayl",
        desc: "Xodim adaptatsiyasi va o'qitish tizimi",
        checked: true
      },
      {
        title: "Payroll — Bexruz",
        desc: "Ish haqi hisob-kitobi, xodimlar bazasi",
        checked: true
      },
      {
        title: "HR analitik — Husayn",
        desc: "HR analitika, rahbariyatga xulosa",
        checked: true
      }
    ]
  },
  {
    id: 5,
    title: "5. Xavfsizlik Departamenti",
    subtitle: "Xolid · Xavfsizlik",
    headerBg: "#d75555", // Red
    managerId: "xolid",
    items: [
      {
        title: "Xavfsizlik departamenti rahbari — Xolid",
        desc: "Umumiy xavfsizlik holati, KPI, strategik qarorlar",
        checked: true
      },
      {
        title: "Videokuzatuv va tezkor nazorat — Vosiq",
        desc: "CCTV, kamera qamrovi, tezkor nazorat",
        checked: true
      },
      {
        title: "Ichki nazorat va firibgarlik — Irfon",
        desc: "Firibgarlik, inventar fenolati, xizmat tekshiruvlari",
        checked: true
      },
      {
        title: "Kassa va moliyaviy xavfsizlik — Kamron",
        desc: "Kassa kamomadlari, inkassatsiya, cheklar nazorati",
        checked: true
      },
      {
        title: "Axborot va kiberxavfsizlik — Asad",
        desc: "Kiberxavfsizlik, server huquqlari, AI agentlar holati",
        checked: true
      }
    ]
  },
  {
    id: 6,
    title: "6. R&D Departamenti",
    subtitle: "Rafiq · R&D Departamenti",
    headerBg: "#c94f9e", // Plum / Fuchsia
    managerId: "rafiq",
    items: [
      {
        title: "R&D departamenti rahbari — Rafiq",
        desc: "R&D boshqaruv: taqsimot, saralash, rahbariyat hisoboti (rahbar)",
        checked: true
      },
      {
        title: "dasturlash tadqiqotchisi — Claude Code R&D AI",
        desc: "Claude Code, MCP, codebase optimizatsiya",
        checked: true
      },
      {
        title: "AI yangiliklar va platformalar analitigi — Abbos",
        desc: "ChatGPT · Claude · Gemini · Grok · DeepSeek... kuzatuv",
        checked: true
      },
      {
        title: "AI laboratoriya va benchmark muhandisi — Asror",
        desc: "Sinov, benchmark, 100 ballik baho",
        checked: true
      },
      {
        title: "AI arxitektura va integratsiya muhandisi — Usmon",
        desc: "Tasdiqlangan texnologiyani tizimlarga ulash",
        checked: true
      },
      {
        title: "AI xavfsizlik, QA va ROI auditori — Anas",
        desc: "Prompt injection, sifat, 2X/1X oylik ROI",
        checked: true
      }
    ]
  },
  {
    id: 7,
    title: "7. Ta'minot Departamenti",
    subtitle: "Sardor · Ta'minot",
    headerBg: "#4fa168", // Green
    managerId: "sardor",
    items: [
      {
        title: "Ta'minot departamenti rahbari — Sardor",
        desc: "Ta'minot strategiyasi, xarid tasdig'i, rahbariyat hisoboti (rahbar)",
        checked: true
      },
      {
        title: "Ustki kiyim ta'minotchisi — Ubayd",
        desc: "Ustki kiyim ta'minoti — 4 brend kesimida",
        checked: true
      },
      {
        title: "Shim va shalvar ta'minotchisi — Shahid",
        desc: "Shim/shalvar ta'minoti — 4 brend kesimida",
        checked: true
      },
      {
        title: "Oyoq kiyim ta'minotchisi — Odil",
        desc: "Oyoq kiyim ta'minoti — o'lcham matritsasi nazorati",
        checked: true
      },
      {
        title: "Aksessuar ta'minotchisi — Axmad",
        desc: "Aksessuar ta'minoti — trend va barcha xaridlar",
        checked: true
      },
      {
        title: "Ichki kiyim ta'minotchisi — Ikrom",
        desc: "Ichki kiyim/paypoq ta'minoti — uzluksiz assortiment",
        checked: true
      }
    ]
  },
  {
    id: 8,
    title: "8. Shariat Muvofiqligi Qo'mitasi",
    subtitle: "Abdulloh · Shariat",
    headerBg: "#9262c3", // Purple
    managerId: "abdulloh",
    items: [
      {
        title: "Shariat qo'mitasi raisi — Abdulloh",
        desc: "Halol biznes nazorati — narx, shartnoma, kontent, reklama, adolat (yagona AI)",
        checked: true
      }
    ]
  },
  {
    id: 9,
    title: "9. Data Departamenti",
    subtitle: "Muhammad Umar · Data",
    headerBg: "#259f6d", // Emerald Green
    managerId: "muhammad-umar",
    items: [
      {
        title: "Data departamenti rahbari — Muhammad Umar",
        desc: "Billz ma'lumot aniqligi, agentlar nazorati, rahbariyat hisoboti (rahbar)",
        checked: true
      },
      {
        title: "Mahsulot taqsimlash va ko'chirish agenti — Haris",
        desc: "Ombor/do'kon taqsimot va filiallararo ko'chirish",
        checked: true
      },
      {
        title: "Billzga mahsulot kiritish agenti (prixodchi) — Amin",
        desc: "Billz'ga mahsulot kirim qilish va kartochka ochish",
        checked: true
      },
      {
        title: "Mahsulotlar bo'yicha Data analitik — Faysal",
        desc: "Mahsulot savdo tahlili va aylanish nazorati",
        checked: true
      },
      {
        title: "Do'kon va ombor revizori — Luqmon",
        desc: "Billz qoldig'i va real qoldiq mosligi (reviziya)",
        checked: true
      },
      {
        title: "Chegirma va qoldiq tozalash agenti — Siroj",
        desc: "Sekin sotilayotgan qoldiqni ko'chirish yoki chegirma bilan tozalash",
        checked: true
      }
    ]
  },
  {
    id: 10,
    title: "10. Workflow Studio",
    subtitle: "CDO",
    headerBg: "#e0543e", // Coral
    managerId: "muhammad-umar",
    items: [
      {
        title: "Workflow Studio (vizual editor)",
        desc: "Vizual canvasda oqim qurish va tez ishga tushirish",
        checked: true
      },
      {
        title: "AI node (Claude)",
        desc: "Oqim ichida Claude bilan tahlil/generatsiya",
        checked: true
      },
      {
        title: "Ma'lumot node (Billz/SQL)",
        desc: "Kompaniya ma'lumotini oqimga olib kirish",
        checked: true
      },
      {
        title: "Amal node (Telegram/HTTP)",
        desc: "Tashqi amallar: Telegram xabar, HTTP so'rov",
        checked: true
      },
      {
        title: "Webhook trigger",
        desc: "Tashqi hodisa oqimni ishga tushiradi",
        checked: true
      },
      {
        title: "Jadval (cron) trigger",
        desc: "Belgilangan vaqtda avtomatik ishga tushirish",
        checked: true
      },
      {
        title: "Shart/Set mantiq",
        desc: "Shart (IF) va maydon o'rnatish (Set)",
        checked: true
      }
    ]
  },
  {
    id: 11,
    title: "11. Texnologiya AI",
    subtitle: "Texnologiya",
    headerBg: "#7a6ad7", // Indigo / Lavender
    managerId: "rafiq",
    items: [
      { title: "Helpdesk AI", checked: false },
      { title: "Infratuzilma AI", checked: false },
      { title: "Tarmoq (network) AI", checked: false },
      { title: "Xavfsizlik (security) AI", checked: true },
      { title: "Qurilmalar (device) AI", checked: false },
      { title: "POS tizimlari AI", checked: true },
      { title: "Billz / ERP AI", checked: true },
      { title: "Integratsiya (API) AI", checked: true },
      { title: "Monitoring AI", checked: true },
      { title: "Zaxira va tiklash (backup) AI", checked: false }
    ]
  },
  {
    id: 12,
    title: "12. Mijozlar tajribasi AI",
    subtitle: "CX",
    headerBg: "#4aa3d8", // Sky Blue
    managerId: "salmon",
    items: [
      { title: "Telegram bot AI", checked: true },
      { title: "Instagram AI", checked: false },
      { title: "WhatsApp AI", checked: false },
      { title: "Call-markaz AI", checked: false },
      { title: "Shikoyat (complaint) AI", checked: false },
      { title: "NPS AI", checked: false },
      { title: "Izohlar va baholar AI", checked: false },
      { title: "Qaytarish (return) AI", checked: false },
      { title: "Almashish (exchange) AI", checked: false },
      { title: "VIP mijozlar AI", checked: false }
    ]
  },
  {
    id: 13,
    title: "13. Yuridik Departamenti",
    subtitle: "Jamshid · Yuridik",
    headerBg: "#429d6f", // Green
    managerId: "jamshid",
    items: [
      {
        title: "Yuridik departamenti rahbari (CLO) — Jamshid",
        desc: "Huquqiy strategiya, risk, sud, yirik shartnoma yakuniy tasdiq (rahbar)",
        checked: true
      },
      {
        title: "Shartnomalar yuristi — Sodiq",
        desc: "Postavshik/ijarachilik/franchise/distribyutor shartnomalari",
        checked: true
      }
    ]
  },
  {
    id: 14,
    title: "14. Analitika va BI AI",
    subtitle: "Tahlil",
    headerBg: "#e0a23b", // Amber
    managerId: "muhammad-umar",
    items: [
      { title: "BI (Business Intelligence) AI", checked: true },
      { title: "Prognozlash AI", checked: true },
      { title: "Dashboard AI", checked: true },
      { title: "Ma'lumotlar tahlili AI", checked: true },
      { title: "KPI nazorati AI", checked: true },
      { title: "Ogohlantirishlar (alert) AI", checked: true },
      { title: "Tavsiyalar (rekomendatsiya) AI", checked: true },
      { title: "Rahbariyat hisobotlari AI", checked: true }
    ]
  },
  {
    id: 15,
    title: "15. Avtomatlashtirish AI",
    subtitle: "Avtomatlashtirish",
    headerBg: "#4e91d9", // Blue
    managerId: "rafiq",
    items: [
      { title: "Ish jarayonlari (workflow) AI", checked: false },
      { title: "AI agentlar boshqaruvi", checked: false },
      { title: "Prompt boshqaruvi AI", checked: false },
      { title: "Rejalashtirish (scheduler) AI", checked: true },
      { title: "Bildirishnomalar AI", checked: true },
      { title: "Integratsiya AI", checked: true },
      { title: "RPA (robot avtomatika) AI", checked: false },
      { title: "API gateway AI", checked: true }
    ]
  },
  {
    id: 16,
    title: "16. Bilim va ma'lumot AI",
    subtitle: "Bilim",
    headerBg: "#5c67f1", // Indigo
    managerId: "hamza",
    items: [
      { title: "SOP (protseduralar) AI", checked: false },
      { title: "Kompaniya wiki AI", checked: false },
      { title: "Ichki qoidalar AI", checked: false },
      { title: "Qidiruv (search) AI", checked: false },
      { title: "O'quv materiallari AI", checked: true },
      { title: "Hujjatlar bazasi AI", checked: false },
      { title: "Xotira (knowledge memory) AI", checked: false }
    ]
  }
];
