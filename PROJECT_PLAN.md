# Rencana Proyek: Website Company Profile

## 1. Product Owner (Fokus)
Target utama adalah membuat website *company profile* sederhana yang informatif dan profesional.
- **Cakupan:**
    - Halaman Landing Page tunggal (One-page).
    - Bagian yang disertakan: Hero (Banner utama), About Us (Profil singkat), Services (Layanan), dan Contact (Info kontak).
    - Desain minimalis menggunakan Tailwind CSS yang sudah tersedia di proyek.
- **Tujuan:** Memberikan kredibilitas online bagi entitas perusahaan.

## 2. Project Manager (Jadwal/Alur)
Urutan pengerjaan:
1. **Fase Manajemen (Saat ini):** Perencanaan ruang lingkup, jadwal, dan alur kerja.
2. **Fase Desain/UI:** Penyesuaian struktur HTML (`index.html`) dan styling (`styles.css`) dengan komponen Tailwind yang sudah terinstal.
3. **Fase Coding:** Implementasi konten ke dalam file HTML.
4. **Fase QA:** Verifikasi tata letak, responsivitas (mobile-first), dan validasi link kontak.
5. **Fase Akhir:** Finalisasi dan serah terima (handoff).

## 3. System Analyst (Teknis)
- **Teknologi:** HTML5, CSS3 (Tailwind CSS), JavaScript (vanilla jika diperlukan interaktivitas simpel).
- **Struktur:**
    - `index.html`: Struktur utama.
    - `styles.css`: Custom overrides jika perlu (menggunakan Tailwind).
    - `components.js`: (Optional) jika butuh reusability untuk elemen UI.
- **Workflow:**
    - Menggunakan *utility-first CSS* untuk styling cepat.
    - Memastikan file `package.json` digunakan untuk menjalankan *build tool* (vite) jika diperlukan untuk *dev server*.
