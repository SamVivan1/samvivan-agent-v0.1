# 🌐 n8n Workflow Frontend Dashboard

## 📘 Tentang Proyek

Ini adalah **frontend website** untuk mengelola dan memantau berbagai **workflow otomatisasi n8n pribadi**, dibangun menggunakan **React, Vite, dan TypeScript**.

Website ini berfungsi sebagai antarmuka visual dari sistem n8n yang menjalankan berbagai agent dan automasi berikut:

1. 🕒 **Absen Otomatis**  
   Workflow yang menjalankan absen kuliah secara otomatis sesuai jadwal.  
   File terkait: `absen-otomatis-JOwGA6XCfmsKkx5g.json`

2. 💾 **Backup n8n Workflows**  
   Workflow yang melakukan backup otomatis seluruh workflow aktif ke GitHub repository, disertai notifikasi ke Discord.  
   File terkait: `backup-n8n-workflows-g3FxqxmmnS7h1qU7.json`

3. 🤖 **Ultimate Personal Assistant**  
   Workflow utama berbasis AI yang berperan sebagai pusat koordinasi dari beberapa agent:
   - Finance Agent (pencatat keuangan)
   - Calendar Agent (pengatur jadwal)
   - Homelab IT Agent (pengelola server)
   - Absen Agent (integrasi absen otomatis)

   File terkait: `ultimate-personal-assistant-U1haGqYgKBrLqDW7.json`

---

## ⚙️ Teknologi yang Digunakan

Frontend ini dikembangkan menggunakan:

- ⚛️ **React**  
- ⚡ **Vite**  
- 🧠 **TypeScript**  
- 🎨 **Tailwind CSS**  
- 🧩 **shadcn/ui** (komponen UI modern berbasis Radix + Tailwind)
- 🔗 Integrasi API ke instance **n8n self-hosted / homelab**

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan sudah terpasang **Node.js** dan **npm**.  
Lalu ikuti langkah berikut:

```bash
# 1️⃣ Clone repository
git clone <YOUR_GIT_URL>

# 2️⃣ Masuk ke direktori proyek
cd <YOUR_PROJECT_NAME>

# 3️⃣ Install dependencies
npm install

# 4️⃣ Jalankan server pengembangan
npm run dev
````

Akses aplikasi di:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Integrasi dengan n8n

Frontend ini terhubung dengan instance **n8n pribadi** melalui API endpoint yang aman.
Beberapa fitur utama yang tersedia:

* Melihat status workflow dan eksekusi terakhir
* Memicu workflow manual seperti *Absen Otomatis* atau *Backup*
* Menampilkan log output secara real-time dari server homelab
* Memberi notifikasi hasil melalui Discord atau Telegram

Pastikan file `.env` berisi konfigurasi endpoint dan token autentikasi n8n:

```env
VITE_N8N_BASE_URL=https://your-n8n-instance/api/v1
VITE_N8N_API_KEY=your_n8n_personal_api_key
```

---

## 📦 Deployment

Frontend dapat dideploy di berbagai platform:

* Vercel
* Netlify
* Cloudflare Pages
* VPS pribadi / Docker container

Untuk build produksi:

```bash
npm run build
```

Output akan tersedia di folder `/dist` dan siap untuk dideploy.

---

## 🧠 Catatan

Frontend ini berfungsi sebagai **UI layer** untuk sistem agent cerdas berbasis n8n, di mana setiap workflow memiliki peran spesifik seperti:

* Automasi absen kuliah
* Backup GitHub
* Integrasi dengan Homelab dan AI agent

---

© 2025 — Developed by **SamVivan** and some vibe code with several tools 🦾
