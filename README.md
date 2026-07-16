# CRMFlow - SaaS CRM Landing Page

A modern, responsive SaaS CRM landing page built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**. The project includes a Product Inquiry form, REST APIs, and an Admin Dashboard for managing customer inquiries.

---

## 🚀 Live Demo

**Frontend:** https://your-frontend-url.vercel.app

**Backend:** https://your-backend-url.onrender.com

---

## 📸 Screenshots

> Add screenshots here after deployment.

### Landing Page

![Landing Page](./screenshots/landing-page.png)

### Admin Dashboard

![Dashboard](./screenshots/dashboard.png)

---

# ✨ Features

### Landing Page

- Responsive Navbar
- Hero Section
- Trusted Companies
- Features Section
- Pricing Plans
- Testimonials
- FAQ Accordion
- Contact Sales Form
- Footer

### Product Inquiry Form

- Full Name
- Company Name
- Email Address
- Phone Number
- Country
- Industry
- Company Size
- Message
- Client-side Validation
- Success & Error Notifications

### Backend

- Create Inquiry
- Get All Inquiries
- Delete Inquiry
- MongoDB Integration
- RESTful APIs
- MVC Architecture

### Admin Dashboard

- View All Inquiries
- Search by Name
- Search by Company
- Filter by Country
- Filter by Industry
- Delete Inquiry
- Dashboard Statistics
- Loading & Error States

### Bonus Features

- Dark Mode
- Responsive Dashboard
- Reusable Components
- Environment Variables
- Clean Folder Structure

---

# 🛠️ Tech Stack

## Frontend

- React.js (Vite)
- JavaScript
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

## Deployment

- Vercel
- Render
- MongoDB Atlas

---

# 📁 Folder Structure

```
crmflow/

├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── ui/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/crmflow.git
```

```bash
cd crmflow
```

---

# Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:8000
```

Run frontend

```bash
npm run dev
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string
```

Run backend

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Create Inquiry

### POST

```
/api/inquiry
```

Request

```json
{
  "fullName": "John Doe",
  "companyName": "ABC Pvt Ltd",
  "email": "john@example.com",
  "phone": "9876543210",
  "country": "India",
  "industry": "Information Technology",
  "companySize": "11-50",
  "message": "Looking for CRM demo."
}
```

---

## Get All Inquiries

### GET

```
/api/inquiry
```

Response

```json
{
  "success": true,
  "count": 10,
  "data": []
}
```

---

## Delete Inquiry

### DELETE

```
/api/inquiry/:id
```

---

# 💻 Admin Dashboard

Navigate to:

```
/admin
```

Features

- View inquiries
- Search inquiries
- Filter by country
- Filter by industry
- Delete inquiry
- Dashboard statistics

---

# 📱 Responsive Design

Tested On

- Mobile
- Tablet
- Laptop
- Desktop

---

# 🔒 Environment Variables

Frontend

```env
VITE_API_URL=http://localhost:8000
```

Backend

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string
```

---

# 🧪 Testing

### Frontend

- Responsive UI
- Form Validation
- Loading States
- Error Handling

### Backend

- POST API
- GET API
- DELETE API
- MongoDB Connection

---

# 🚀 Future Improvements

- Authentication (JWT)
- Pagination
- Export Inquiries to CSV
- Email Notifications
- Analytics Dashboard
- Docker Support
- Unit Testing

---

# 👨‍💻 Author

**Anadil Gazi**

GitHub: https://github.com/Anadil01

LinkedIn: https://linkedin.com/in/your-profile

Email: your-email@example.com

---

# 🙏 Acknowledgements

This project was built as part of the **HelloAaye React Full Stack Intern Assessment**.

It demonstrates modern frontend development, REST API design, MongoDB integration, responsive UI development, and clean component architecture.

---

⭐ If you found this project helpful, consider giving it a star!