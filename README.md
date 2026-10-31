# Decision Management AI — Tashkiliy Tuzilma (Org Chart Dashboard)

Berilgan rasm asosida aynan bir xil (**pixel-perfect**) tashkiliy tuzilma (org chart / dashboard) sahifasi yaratildi.

## Loyiha tarkibi:
- [index.html](file:///C:/Users/user/Desktop/Новая%20папка/index.html) — Bir marta bosish bilan brauzerda to‘liq ishlaydigan mustaqil HTML + Tailwind CSS sahifasi.
- [departmentsData.js](file:///C:/Users/user/Desktop/Новая%20папка/departmentsData.js) — Barcha 16 ta bo‘lim, 10 ta boshqaruvchi va 2 ta CEO/COO AI ma'lumotlari jamlangan toza JavaScript moduli.
- [OrgChart.jsx](file:///C:/Users/user/Desktop/Новая%20папка/OrgChart.jsx) — React (Next.js / Vite / CRA) loyihalariga to‘g‘ridan-to‘g‘ri qo‘yib ishlatishga tayyor modulli React komponenti.

---

## 1. Ierarxiya va Tuzilma:
1. **1-daraja (Bosh direktor)**:
   - `Ali · Bosh Direktor (CEO AI)` — "Strategik boshqaruv va qarorlar" (To'q ko'k rang `#161d37`).
2. **2-daraja (Operatsion boshqaruv)**:
   - `Saffon · Ijrochi Sun'iy Intellekt` — "Chief AI Officer · barcha AI yo'nalishlarini muvofiqlashtiradi · @ijrochiai_bot" (Binafsha rang `#7259b4`).
3. **3-daraja (10 ta Boshqaruvchi shinasi)**:
   - Muhammad Umar (Data Direktori · CDO AI)
   - Zakiy (Bosh Moliyachi · CFO AI)
   - Mahsun (Marketing Direktori · CMO AI)
   - Salmon (Savdo Direktori · CSO AI)
   - Abdulloh (Shariat Qo'mitasi Raisi · Shariat AI)
   - Sardor (Ta'minot Direktori · SCM AI)
   - Hamza (Inson Resurslari Direktori · CHRO AI)
   - Jamshid (Yuridik Direktori · CLO AI)
   - Xolid (Xavfsizlik Direktori · CSO AI)
   - Rafiq (Innovatsiya Direktori · CTO AI)
4. **4-daraja (16 ta Departament — 7 ta ustunli grid)**:
   - **1-qator**:
     1. Moliya Departamenti (Teal `#0e9488`)
     2. Marketing Departamenti (Amber/Orange `#ea8b3e`)
     3. Savdo Departamenti (Royal Blue `#4379d5`)
     4. HR Departamenti (Rose `#d85d74`)
     5. Xavfsizlik Departamenti (Red `#d75555`)
     6. R&D Departamenti (Fuchsia `#c94f9e`)
     7. Ta'minot Departamenti (Green `#4fa168`)
   - **2-qator**:
     8. Shariat Muvofiqligi Qo'mitasi (Purple `#9262c3`)
     9. Data Departamenti (Emerald Green `#259f6d`)
     10. Workflow Studio (Coral `#e0543e`)
     11. Texnologiya AI (Lavender/Indigo `#7a6ad7`)
     12. Mijozlar tajribasi AI (Sky Blue `#4aa3d8`)
     13. Yuridik Departamenti (Green `#429d6f`)
     14. Analitika va BI AI (Gold/Amber `#e0a23b`)
   - **3-qator**:
     15. Avtomatlashtirish AI (Cornflower Blue `#4e91d9`)
     16. Bilim va ma'lumot AI (Royal Blue `#5c67f1`)

---

## 2. Qo‘shimcha Imkoniyatlar:
- **Jonli Qidiruv**: Xodim nomi, lavozimi, bo'limi yoki vazifasi bo'yicha tezkor qidiruv.
- **Interaktiv Filtrlash**: 10 ta boshqaruvchidan birini tanlaganda unga tegishli bo'limlar ajratib ko'rsatiladi.
- **Chop etish / PDF Eksport**: Barcha brauzerlarda A3/A4 formatida chop etishga to'liq moslashtirilgan `@media print` stillari.
