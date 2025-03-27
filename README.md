# 🏗️ FairFundz - Ensuring Fair Wages for Workers

## 📌 Project Overview  
FairFundz is a **digital wage payment platform** that ensures **transparent, timely, and fair salary disbursement** for workers in the unorganized sector. It helps **eliminate wage theft, reduces contractor fraud, and provides workers with digital proof of payments**.

## 🚧 Problem Statement  
Workers in unorganized sectors face:  
- ❌ Unfair wage cuts by middlemen  
- ⏳ Delayed or incomplete payments  
- 📄 Lack of digital payment records  
- ⚖️ No legal proof for wage disputes  

## 💡 Solution - How FairFundz Works  
✅ **Direct Wage Payments:** Employers transfer salaries directly to workers  
✅ **Digital Payment Proof:** Workers get receipts via SMS/app  
✅ **Legal Compliance:** Wage records for companies  
✅ **Dispute Resolution:** Workers can report payment issues  

---

## 🛠️ Tech Stack  
### **Frontend:**  
- React.js + Tailwind CSS  
- Responsive UI for companies & workers  

### **Backend:**  
- Node.js (Express.js)  
- MongoDB/PostgreSQL for database  
- JWT Authentication & OTP Verification  

### **Payments & Security:**  
- Razorpay / Stripe / UPI integration  
- AES Encryption for user data  

---

## 📌 Features  
### ✅ **MVP Scope (Phase 1)**  
- 👷 Worker & Employer Registration  
- 💸 Direct Bank Transfers  
- 🧾 Wage Tracking & Digital Proof  
- 📢 Dispute Resolution System  

### 🔥 **Future Enhancements (Phase 2 & Beyond)**  
- 🔍 AI-based fraud detection  
- 🔗 Blockchain for payment transparency  
- 🏦 Loan & financial services for workers  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Ankiitsuthar/FairFundz.git
cd FairFundz

### 2️⃣ Install Dependencies
npm install   # Install backend dependencies
cd client && npm install  # Install frontend dependencies

### 3️⃣ Start Development Servers
# Start Backend Server
npm run dev  

# Start Frontend (in a separate terminal)
cd client
npm start

### Set up .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY=your_payment_gateway_key


