# 🏋️‍♂️ FitPlanHub  
### *A Trainer–User Fitness Subscription Platform (MVP)*

FitPlanHub is a full-stack MERN application where **certified trainers create fitness plans** and **users discover, follow trainers, and subscribe to plans**.  
The project is built as an **MVP**, with a clear path to scale into a full SaaS product.

---

## 🚀 Features Overview

### 🔐 Authentication & Roles
- Secure **JWT-based authentication**
- Role-based access:
  - **User**
  - **Trainer**
- Password hashing using **bcrypt**

---

### 👤 User Capabilities
- Browse **all trainers and their plans**
- View **plan details** (preview or full access based on subscription)
- Follow / unfollow trainers
- Subscribe to fitness plans (simulated payment)
- View subscribed plans in a **personalized feed**

---

### 🧑‍🏫 Trainer Capabilities
- Create, update, and delete fitness plans
- View all their created plans
- See users who have subscribed to their plans
- See users who follow them

---

### 📰 Personalized Feed
- Users see plans only from **trainers they follow**
- Shows whether a plan is already subscribed or not

---

## 🧱 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcrypt**

### Frontend
- **React (Vite)**
- **Axios**
- **Tailwind CSS**
- **React Router**

---

## 🗂️ Project Structure (Simplified)

server/ 
    ─ src/
       ─ controllers/
       ─ models/
       ─ routes/
       ─ middleware/
       ─ server.js    
    ─ .env    
    ─ package.json

client/
    ─ src/
        ─ pages/
        ─ components/
        ─ auth/
        ─ api/
        ─ App.jsx
    ─ package.json

    
---

## 🔑 Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

⚠️ Note: Special characters in MongoDB passwords must be URL-encoded.

---

# How to Run the Project

## Backend 
```
cd server
npm install
node src/server.js
```

Backend runs on:
http://localhost:5000

## Frontend
```
cd client
npm install
npm run dev
```

Frontend runs on:
http://localhost:5173

---

# Application Flow

-User lands on a marketing landing page
-User chooses Login or Signup

## After authentication:
-Users → redirected to User Dashboard
-Trainers → redirected to Trainer Dashboard

## Users can:
-Explore trainers & plans
-Follow trainers
-Subscribe to plans
-View subscribed plans in Feed

## Trainers can:
-Manage fitness plans
-View followers & subscribers

--- 

# Future Enhancements (SaaS Roadmap)

- Payment gateway integration (Stripe/Razorpay)
- Admin dashboard
- Trainer analytics
- Reviews & ratings
- Notifications
- Plan scheduling & progress tracking

---

# What This Project Demonstrates

- Clean backend architecture
- Role-based access control
- RESTful API design
- Database relationships (one-to-many, many-to-many)
- Real-world product flow thinking

---

# Disclaimer

This project was built as part of a placement assignment and represents an MVP implementation.
No real payments are processed.

---

# Author

Vaidika Kaul
B.Tech Computer Science & Engineering