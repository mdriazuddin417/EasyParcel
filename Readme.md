📦 Parcel Delivery API

A secure, modular, and role-based backend API for managing parcel deliveries. Inspired by Pathao Courier & Sundarban Courier, built using Express.js, Mongoose, Zod, JWT, and TypeScript.

🚀 Features

🔐 Authentication & Authorization

JWT-based login system

Roles: Admin, Sender, Receiver

Password hashing with bcrypt

📦 Parcel Management

Create, update, cancel, and track parcels

Embedded status logs inside parcel model

Unique tracking ID (e.g., TRK-20250816-123456)

🧱 Role-based Access Control

Senders: create/cancel/view parcels

Receivers: view incoming & confirm deliveries

Admins: manage all users & parcels

✅ Validations with Zod

🧩 Modular Code Architecture

🔁 Transaction & Status History Tracking

📂 Project Structure

src/
├── modules/
│   ├── auth/        # Authentication & authorization logic
│   ├── user/        # User model & services
│   ├── parcel/      # Parcel model, status log & services
├── middlewares/     # Auth, role, and error middlewares
├── config/          # DB & env configuration
├── utils/           # Helper utilities (fee calculation, etc.)
├── app.ts           # Express app entry

🛠 Tech Stack

Node.js + Express.js

MongoDB + Mongoose

Zod (request validation)

JWT (authentication)

bcrypt (password hashing)

TypeScript

📑 API Endpoints



📦 Parcel Status Flow

REQUESTED → APPROVED → DISPATCHED → PICKED → IN_TRANSIT → OUT_FOR_DELIVERY → DELIVERED

Other states: CANCELLED, RETURNED, HELD, BLOCKED

🔑 Roles & Permissions

Role

Capabilities

Sender

Create parcel, Cancel parcel, View own parcels

Receiver

View incoming parcels, Confirm delivery

Admin

Manage all parcels & users, Update status, Block/unblock

⚙️ Setup & Installation

# Clone repo
git clone https://github.com/yourname/parcel-delivery-api.git
cd parcel-delivery-api

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# edit .env (Mongo URI, JWT secret, etc.)

# Run in dev mode
npm run dev

# Build & run in prod
npm run build
npm start

🔧 Environment Variables

PORT=5000
MONGO_URI=mongodb://localhost:27017/parcel_delivery
JWT_SECRET=supersecretkey

🧪 Testing

npm run test

🛡 Security & Validations

Passwords are hashed with bcrypt

JWT tokens are used for authentication

Zod ensures request validation

Role-based middleware ensures access control

Blocked users/parcels cannot perform actions

🎯 Future Improvements

Delivery agents & hub assignment

Fee calculation based on distance & weight

Public tracking endpoint via tracking ID

Coupon/discount support

Admin dashboard APIs

📜 License

MIT License © 2025

