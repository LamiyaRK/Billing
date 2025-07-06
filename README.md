# 🧾 BillEase - Online Bill Payment Portal

BillEase is a full-stack web application designed to simplify online bill payments. Users can securely log in, view various types of bills (electricity, gas, water, tuition, etc.), and pay them from anywhere. With a clean UI, Google Sign-In, and dynamic filtering — it delivers a smooth and intuitive user experience.

---

## 🌐 Live Site

🔗 [https://billing-system-1101a.web.app/](https://billing-system-1101a.web.app/)

---

## 🧪 Project Purpose

The goal of BillEase is to digitize and streamline bill payment, allowing users to manage and pay bills securely and efficiently in one place. The app also demonstrates core full-stack skills like authentication, conditional routing, form validation, and dynamic UI rendering.

---

## 🧩 Core Technologies Used

### 💻 Frontend:
- React.js
- Tailwind CSS + DaisyUI
- Firebase Authentication (Email/Password & Google)
- SliderJS for hero banner
- React Router DOM

### ⚙ Backend:
- Firebase backend (Auth + Hosting)
- Optional: Vercel (if separate server is used)

---

## ✨ Key Features

- 🔐 **Authentication** with Firebase (Email/Password + Google Sign-In)  
- 🔄 **Forgot Password** and error validation handling  
- 📂 **Bill Filtering** based on category (e.g., Electricity, Gas, Tuition)  
- 📲 **Responsive Design** for mobile, tablet, and desktop  
- 🔔 **Toast Notifications** for user feedback  
- 🎞️ **SliderJS Integration** for interactive banners  
- 💡 **Real-time UI Updates** with clean state management  
- 🌗 Visually polished and user-friendly interface  

---

## 📦 Dependencies (with Versions)

```json
"firebase": "^10.12.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.2.1",
"react-router-dom": "^6.23.1",
"react-toastify": "^10.0.4",
"sliderjs": "^2.0.4",
"tailwindcss": "^3.4.1",
"daisyui": "^4.6.0",
"vite": "^5.2.10"
⚙️ How to Run Locally
🔧 Client Setup

git clone https://github.com/LamiyaRK/bill-ease-client.git
cd bill-ease-client
npm install
npm run dev


📁 Environment Variables
Create a .env file in the root of your project and add:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
⛔ Do not push .env file to GitHub!